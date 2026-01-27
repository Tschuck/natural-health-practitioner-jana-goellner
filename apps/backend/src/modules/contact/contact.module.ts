import { ProtonConfig } from '@/modules/contact/config/proton.config';
import { ContactController } from '@/modules/contact/controllers/contact.controller';
import { Global, Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

@Global()
@Module({
  controllers: [ContactController],
  providers: [ProtonConfig],
  imports: [ThrottlerModule.forRoot({ throttlers: [] })],
})
export class ContactModule {}
