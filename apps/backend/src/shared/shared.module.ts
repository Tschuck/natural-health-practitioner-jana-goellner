import { ValidationService } from '@/shared/services/validation.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [ValidationService],
  exports: [ValidationService],
})
export class SharedModule {}
