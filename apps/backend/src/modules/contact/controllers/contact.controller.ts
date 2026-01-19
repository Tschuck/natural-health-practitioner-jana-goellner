import { ContactDto } from '@/modules/contact/dto/contact.dto';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';

@Controller('contact')
export class ContactController {
  constructor() {}

  @Post()
  @ApiOperation({ summary: 'Send a contact request via mail to info mail' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @Throttle({
    default: {
      ttl: 1_000 * 300, // 300 seconds -> 5 minutes
      limit: 1, // maximum 1 requests every 5 minutes
    },
  })
  public contact(@Body() contact: ContactDto): void {
    console.log(contact);
  }
}
