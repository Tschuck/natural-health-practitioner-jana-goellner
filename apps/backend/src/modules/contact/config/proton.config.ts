import { ValidationService } from '@/shared/services/validation.service';
import { Injectable } from '@nestjs/common';
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum BackendEnv {
  production = 'production',
  development = 'development',
  test = 'test',
}

class ProtonConfigDefinition {
  @IsEnum(BackendEnv)
  @IsOptional()
  public env = process.env.NODE_ENV ?? BackendEnv.development;

  @IsString()
  @IsNotEmpty()
  public smtpToken = process.env.PROTON_SMTP_TOKEN!;

  @IsEmail()
  @IsNotEmpty()
  public infoEmail = process.env.PROTON_INFO_EMAIL!;

  @IsEmail()
  @IsNotEmpty()
  public backendEmail = process.env.PROTON_BACKEND_EMAIL!;

  @IsString()
  @IsNotEmpty()
  public host = process.env.PROTON_HOST!;

  @IsNumber()
  public port: number = parseInt(process.env.PROTON_PORT!, 10);
}

@Injectable()
export class ProtonConfig extends ProtonConfigDefinition {
  public constructor(validationService: ValidationService) {
    super();

    validationService.validateOrThrow({
      data: this,
      validatorClass: ProtonConfigDefinition,
      errorMessage: 'Invalid proton config',
    });
  }
}
