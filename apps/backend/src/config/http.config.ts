import { Injectable } from '@nestjs/common';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { ValidationService } from '@/shared/services/validation.service.js';

export class HttpConfigDefinition {
  @IsString()
  @IsOptional()
  public host = process.env.HTTP_HOST ?? '0.0.0.0';

  @IsNumber({}, { message: 'HTTP_PORT env missing' })
  public port = process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : 8080;

  @IsString({ message: 'HTTP_PUBLIC_URL env missing' })
  public publicUrl = process.env.HTTP_PUBLIC_URL!;
}

@Injectable()
export class HttpConfig extends HttpConfigDefinition {
  public constructor(validationService: ValidationService) {
    super();

    validationService.validateOrThrow({
      data: this,
      validatorClass: HttpConfigDefinition,
      errorMessage: 'Invalid http config',
    });
  }
}
