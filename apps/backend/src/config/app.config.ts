import { ValidationService } from '@/shared/services/validation.service';
import { Injectable } from '@nestjs/common';
import { IsEnum, IsOptional } from 'class-validator';

export enum BackendEnv {
  production = 'production',
  development = 'development',
  test = 'test',
}

class AppConfigDefinition {
  @IsEnum(BackendEnv)
  @IsOptional()
  public env = process.env.NODE_ENV ?? BackendEnv.production;
}

@Injectable()
export class AppConfig extends AppConfigDefinition {
  public constructor(validationService: ValidationService) {
    super();

    validationService.validateOrThrow({
      data: this,
      validatorClass: AppConfigDefinition,
      errorMessage: 'Invalid app config',
    });
  }
}
