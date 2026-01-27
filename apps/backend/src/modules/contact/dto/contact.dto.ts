import { IsDate, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength } from 'class-validator';

export class ContactDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsPhoneNumber('DE')
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  public message: string;
}
