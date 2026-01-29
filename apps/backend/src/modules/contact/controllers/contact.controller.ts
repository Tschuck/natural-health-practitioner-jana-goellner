import { ProtonConfig } from '@/modules/contact/config/proton.config';
import { ContactDto } from '@/modules/contact/dto/contact.dto';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Controller('api/contact')
export class ContactController {
  private nodemailerTransport: Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;

  constructor(private readonly protonConfig: ProtonConfig) {
    this.nodemailerTransport = createTransport({
      host: protonConfig.host,
      port: protonConfig.port,
      auth: {
        user: protonConfig.backendEmail,
        pass: protonConfig.smtpToken,
      },
    });
  }

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
  public async contact(@Body() contact: ContactDto) {
    await this.nodemailerTransport.sendMail({
      from: `"Homepage backend" <from: <${this.protonConfig.backendEmail}>`,
      to: this.protonConfig.infoEmail,
      subject: `Kontaktanfrage: ${contact.name}`,
      replyTo: contact.email,
      text: `
Du hast eine neue Kontaktanfrage ueber die Homepage erhalten.

---

## Sender Details

Name: ${contact.name}
Email: ${contact.email}
Phone: ${contact.phone}

---

## Nachricht

${contact.message}

---

Automatisch versendet von deinem backend.
`,
    });

    console.log(`Successfully sent contact request to info mail: ${new Date().toString()}`);
  }
}
