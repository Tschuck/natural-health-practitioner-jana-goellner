import { NestFactory } from '@nestjs/core';
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from '@/app.module';
import { HttpConfig } from '@/config/http.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfig, BackendEnv } from '@/config/app.config';

async function bootstrap() {
  const packagePath = resolve(process.cwd(), 'package.json');
  const packageContents = await readFile(packagePath, 'utf-8');
  const { name, version } = JSON.parse(packageContents) as Record<string, string>;

  const fastifyAdapter = new FastifyAdapter({
    genReqId: () => crypto.randomUUID(),
    trustProxy: true,
  });

  // Create the application
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter, {
    abortOnError: false,
  });

  // Enable CORS
  const appConfig = app.get(AppConfig);
  const { host, port, publicUrl = `http://${host}:${port}` } = app.get(HttpConfig);
  app.enableCors({
    origin: appConfig.env === BackendEnv.development.toString() ? '*' : process.env.HTTP_PUBLIC_URL,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
  });

  // Configure the OpenAPI documentation
  const openApiConfigBuilder = new DocumentBuilder();

  openApiConfigBuilder.setTitle(name);
  openApiConfigBuilder.setVersion(version);

  const localUrl = new URL(`http://${host}:${port}/`);

  openApiConfigBuilder.addServer(localUrl.href, 'Local development server');

  if (new URL(publicUrl).href !== localUrl.href) {
    openApiConfigBuilder.addServer(publicUrl, 'Public server');
  }

  const document = SwaggerModule.createDocument(app, openApiConfigBuilder.build());

  // Configure the Swagger UI
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(port);
}

void bootstrap();
