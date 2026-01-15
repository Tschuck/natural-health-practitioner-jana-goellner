import type { ValidationError } from 'class-validator';

import { Injectable, Logger } from '@nestjs/common';
import { instanceToPlain, plainToInstance, type ClassConstructor } from 'class-transformer';
import { validateSync } from 'class-validator';

import { ClassValidatorError } from '@/shared/errors/class-validator.error.js';

interface Constraint {
  propertyPath: string;
  [type: string]: string;
}

@Injectable()
export class ValidationService {
  private readonly logger = new Logger(this.constructor.name);

  /**
   * Validates a class using class validator and returns the instance. Throws an ClassValidatorError with
   * the validation result as details.
   *
   * @param param0.data data to transform into an instance
   * @param param0.errorMessage error message that should be thrown
   * @param param0.validatorClass class the data should be transformed into
   * @returns validated class instance
   */
  public validateOrThrow<T extends object>({
    data = {},
    errorMessage,
    validatorClass,
    exposeUnsetFields = true,
  }: {
    data: object;
    errorMessage: string;
    validatorClass: ClassConstructor<T>;
    exposeUnsetFields?: boolean;
  }): T {
    const instance = plainToInstance(validatorClass, data, {
      exposeUnsetFields: false,
    });
    const validationErrors = validateSync(instance, {
      forbidUnknownValues: false,
    });
    if (validationErrors.length) {
      const error = new ClassValidatorError(errorMessage, validationErrors);

      const constraints = validationErrors.map((error) => this.getNestedConstraints('', error)).flat();
      this.logger.error(`${errorMessage} (${this.getConstraintsString(constraints)})`);

      throw error;
    }

    if (exposeUnsetFields) {
      return instance;
    }

    return instanceToPlain(data, { exposeUnsetFields: false }) as T;
  }

  /**
   * Validates a class using class validator and returns the instance. Throws an ClassValidatorError with
   * the validation result as details.
   *
   * @param param0.data data to transform into an instance
   * @param param0.errorMessage error message that should be thrown
   * @param param0.validatorClass class the data should be transformed into
   * @returns validated class instance
   */
  public validateOrThrowMultipleTypes<T extends object>({
    data = {},
    errorMessage,
    validatorClasses,
    exposeUnsetFields = true,
  }: {
    data: object;
    errorMessage: string;
    validatorClasses: ClassConstructor<T>[];
    exposeUnsetFields?: boolean;
  }): T {
    const errors: ClassValidatorError[] = [];

    for (const validatorClass of validatorClasses) {
      try {
        const result = this.validateOrThrow({
          data,
          errorMessage,
          validatorClass,
          exposeUnsetFields,
        });
        return result;
      } catch (ex) {
        if (ex instanceof ClassValidatorError) {
          errors.push(ex);
        }
      }
    }

    throw new ClassValidatorError(
      errors.map((error) => error.message).join(','),
      errors.map((error) => error.details ?? []).flat()
    );
  }

  private getNestedConstraints(parent: string, error: ValidationError): Constraint[] {
    const constraints = error.constraints ? [{ ...error.constraints, propertyPath: parent }] : [];
    const thisErrorPath = `${parent}.${error.property}`;
    const childConstraints =
      error.children?.map((childError) => this.getNestedConstraints(thisErrorPath, childError)).flat() ?? [];

    return [...constraints, ...childConstraints];
  }

  private getConstraintsString(constraints: Constraint[]): string {
    return constraints.map((constraint) => JSON.stringify(constraint)).join(', ');
  }
}

export const validationService = new ValidationService();
