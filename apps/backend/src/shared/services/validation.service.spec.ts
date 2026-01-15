import { Logger } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { describe, expect, it, vi } from 'vitest';

import { ValidationService } from './validation.service.js';

import { ClassValidatorError } from '@/shared/errors/class-validator.error.js';

class NestedExampleDto {
  @IsString()
  public test2: string;
}

class ExampleDto {
  @IsString()
  public test: string;

  @IsString()
  @IsOptional()
  public optionalTest?: string;

  @Type(() => NestedExampleDto)
  @IsObject()
  @ValidateNested()
  public nested: NestedExampleDto;
}

describe('validate or throw', () => {
  const errorMessage = 'Invalid dto';

  it('should successfully validate and return instance', () => {
    const instance = new ValidationService().validateOrThrow({
      data: { test: 'test', nested: { test2: 'test2' } },
      errorMessage,
      validatorClass: ExampleDto,
    });

    expect(instance).toBeInstanceOf(ExampleDto);
    expect(instance.test).toEqual('test');
    expect(instance).toHaveProperty('optionalTest');
    expect(instance.nested.test2).toEqual('test2');
  });

  it('should successfully validate and return without unset fields', () => {
    const instance = new ValidationService().validateOrThrow({
      data: { test: 'test', nested: { test2: 'test2' } },
      errorMessage,
      validatorClass: ExampleDto,
      exposeUnsetFields: false,
    });

    expect(instance.test).toEqual('test');
    expect(instance).not.toHaveProperty('optionalTest');
    expect(instance.nested.test2).toEqual('test2');
  });

  it('should successfully detect invalid data and throw error', () => {
    const validationService = new ValidationService();
    const logSpy = vi.spyOn((validationService as unknown as { logger: Logger }).logger, 'error');

    const expectedErrors = [
      { isString: 'test must be a string', propertyPath: '' },
      { isString: 'test2 must be a string', propertyPath: '.nested' },
    ];

    expect(
      validationService.validateOrThrow.bind(validationService, {
        data: { nested: {} } as unknown as ExampleDto,
        errorMessage,
        validatorClass: ExampleDto,
      })
    ).toThrow(ClassValidatorError);
    expect(logSpy).toBeCalledWith(
      `${errorMessage} (${expectedErrors.map((error) => JSON.stringify(error)).join(', ')})`
    );
  });
});
