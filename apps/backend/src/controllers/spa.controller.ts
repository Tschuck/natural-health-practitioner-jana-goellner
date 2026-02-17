import { Controller, Get, NotFoundException, Req, Res } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

@Controller()
@SkipThrottle()
export class SpaController {
  @Get('*')
  public serveSpa(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    // Remove leading slash to avoid path.join treating it as absolute
    const path = req.url === '/' ? '' : req.url.replace(/^\//, '');

    let filePath: string;
    // resolve static resources (images, js files, ...)
    if (req.url.split('/').pop()?.includes('.')) {
      filePath = join(__dirname, '..', '..', 'homepage', path);
    } else {
      // try to resolve paths without file ending to index.html
      filePath = join(__dirname, '..', '..', 'homepage', path, 'index.html');
    }

    // Check if file exists
    if (existsSync(filePath)) {
      const { contentType, isBinary } = this.getMimeType(filePath);
      if (isBinary) {
        const content = readFileSync(filePath);
        return res.type(contentType).send(content);
      } else {
        const content = readFileSync(filePath, 'utf-8');
        return res.type(contentType).send(content);
      }
    }

    // File not found - try to serve root index.html as fallback for SPA routing
    const fallbackPath = join(__dirname, '..', '..', 'homepage', 'index.html');

    if (existsSync(fallbackPath)) {
      const content = readFileSync(fallbackPath, 'utf-8');
      return res.type('text/html').send(content);
    }

    throw new NotFoundException(`Could not load file ${path}`);
  }

  private getMimeType(filePath: string): { contentType: string; isBinary: boolean } {
    const ext = filePath.split('.').pop()?.toLowerCase();

    const mimeTypes: Record<string, { contentType: string; isBinary: boolean }> = {
      html: { contentType: 'text/html', isBinary: false },
      js: { contentType: 'application/javascript', isBinary: false },
      css: { contentType: 'text/css', isBinary: false },
      json: { contentType: 'application/json', isBinary: false },
      png: { contentType: 'image/png', isBinary: true },
      jpg: { contentType: 'image/jpeg', isBinary: true },
      jpeg: { contentType: 'image/jpeg', isBinary: true },
      gif: { contentType: 'image/gif', isBinary: true },
      svg: { contentType: 'image/svg+xml', isBinary: false },
      ico: { contentType: 'image/x-icon', isBinary: true },
      woff: { contentType: 'font/woff', isBinary: true },
      woff2: { contentType: 'font/woff2', isBinary: true },
      ttf: { contentType: 'font/ttf', isBinary: true },
      webp: { contentType: 'image/webp', isBinary: true },
      xml: { contentType: 'application/xml', isBinary: false },
      txt: { contentType: 'text/plain', isBinary: false },
    };

    return mimeTypes[ext || ''] || { contentType: 'application/octet-stream', isBinary: true };
  }
}
