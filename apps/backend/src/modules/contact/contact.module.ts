import { ProtonConfig } from '@/modules/contact/config/proton.config';
import { ContactController } from '@/modules/contact/controllers/contact.controller';
import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Global()
@Module({
  controllers: [ContactController],
  providers: [
    ProtonConfig,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class ContactModule {}
