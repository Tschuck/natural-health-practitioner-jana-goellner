import { msg } from '@lingui/core/macro';
import { Equals, IsBoolean, IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class ContactSchema {
  @Length(2, 50, { message: msg`Dieses Feld muss mindestens 2 und maximal 50 Zeichen enthalten.`.message })
  public name: string;

  @IsEmail({}, { message: msg`Bitte geben sie eine valide E-Mail-Adresse ein.`.message })
  public email: string;

  @IsPhoneNumber('DE', { message: msg`Bitte geben Sie eine korrekte Telefonnummer an.`.message })
  public phone: string;

  @IsString({ message: msg`Bitte geben Sie eine persönliche Nachricht ein.`.message })
  @Length(10, 500, { message: msg`Die persönliche Nachricht muss mindestens 10 Zeichen und maximal 500.`.message })
  public message: string;

  @IsBoolean({ message: msg`Bitte bestätigen Sie die Datenschutzbestimmungen.`.message })
  @Equals(true, { message: msg`Sie müssen den Datenschutzbestimmungen zustimmen.`.message })
  public consent: boolean;
}
