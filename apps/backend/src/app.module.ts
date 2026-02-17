import { ConfigModule } from '@/config/config.module';
import { SpaController } from '@/controllers/spa.controller';
import { ContactModule } from '@/modules/contact/contact.module';
import { TelemtryModule } from '@/modules/telemtry/telemetry.module';
import { SharedModule } from '@/shared/shared.module';
import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    SharedModule,
    ConfigModule,
    TelemtryModule,
    ContactModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'default',
          ttl: 60000, // 60 seconds default
          limit: 10, // 10 requests per minute default
        },
      ],
    }),
  ],
  controllers: [SpaController],
})
export class AppModule {}
