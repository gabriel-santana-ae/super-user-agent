import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { Log } from './log.service';

@Controller()
export class AppController {
  constructor(private readonly log: Log) {}

  @Get('test')
  async test(@Req() req: Request): Promise<any> {
    this.log.info(req.url);
    console.log('user-agent:', req.headers['user-agent']);
    console.log('cf-ipcountry:', req.headers['cf-ipcountry']);
    console.log('sec-ch-ua-platform:', req.headers['sec-ch-ua-platform']);
  }
}
