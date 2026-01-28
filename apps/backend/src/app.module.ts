import { ConfigModule } from '@/config/config.module';
import { ContactModule } from '@/modules/contact/contact.module';
import { TelemtryModule } from '@/modules/telemtry/telemetry.module';
import { SharedModule } from '@/shared/shared.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    SharedModule,
    ConfigModule,
    TelemtryModule,
    ContactModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'homepage'),
    }),
  ],
})
export class AppModule {}
