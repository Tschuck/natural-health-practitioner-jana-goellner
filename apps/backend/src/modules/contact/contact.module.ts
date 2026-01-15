import { ContactController } from '@/modules/contact/controllers/contact.controller';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  controllers: [ContactController],
})
export class ContactModule {}
