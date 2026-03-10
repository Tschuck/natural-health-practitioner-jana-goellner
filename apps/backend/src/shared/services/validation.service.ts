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
