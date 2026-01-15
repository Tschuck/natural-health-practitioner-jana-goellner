import type { ValidationError } from 'class-validator';

import { BaseError } from '@/shared/types/base-error.js';

export class ClassValidatorError extends BaseError<ValidationError[]> {
  public static code = 'CLASS_VALIDATOR_ERROR';
}
