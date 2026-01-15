import { ContactDto } from '@/modules/contact/dto/contact.dto';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class ContactController {
  constructor() {}

  @Post()
  @ApiOperation({ summary: 'Send a contact request via mail to info mail' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  public contact(@Body() contact: ContactDto): void {
    console.log(contact);
  }
}
