import type { HttpStatus } from '@nestjs/common';

export interface AdditionalErrorDetails {
  statusCode: HttpStatus;
}

export abstract class BaseError<T extends object | undefined = object | undefined> extends Error {
  declare protected static code?: string;

  declare public readonly message: string;
  declare public readonly details?: T;
  declare public readonly statusCode?: HttpStatus;

  public get code(): string {
    return (this.constructor as typeof BaseError).code ?? 'UNKNOWN_ERROR';
  }

  public constructor(message: string, details?: T, additional?: AdditionalErrorDetails) {
    super();
    this.name = this.constructor.name;
    this.message = message;
    this.details = details;
    if (additional?.statusCode) {
      this.statusCode = additional.statusCode;
    }

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
