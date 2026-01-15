import { AppConfig } from '@/config/app.config';
import { BackendConfig } from '@/config/backend.config';
import { HttpConfig } from '@/config/http.config';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [AppConfig, BackendConfig, HttpConfig],
})
export class ConfigModule {}
