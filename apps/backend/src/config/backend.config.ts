import { Global, Module } from '@nestjs/common';
import dotenv from 'dotenv';

import { AppConfig } from '@/config/app.config.js';
import { HttpConfig } from '@/config/http.config.js';

@Global()
@Module({
  providers: [AppConfig, HttpConfig],
  exports: [AppConfig, HttpConfig],
})
export class BackendConfig {
  public constructor() {
    dotenv.config({
      path: ['.env', '.env.default'],
      quiet: true,
      override: true,
    });
  }
}
