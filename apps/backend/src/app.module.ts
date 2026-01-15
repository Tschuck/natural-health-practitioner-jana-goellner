import { ConfigModule } from '@/config/config.module';
import { ContactModule } from '@/modules/contact/contact.module';
import { TelemtryModule } from '@/modules/telemtry/telemetry.module';
import { SharedModule } from '@/shared/shared.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [SharedModule, ConfigModule, TelemtryModule, ContactModule],
})
export class AppModule {}
