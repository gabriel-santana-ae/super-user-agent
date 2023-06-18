import { BadRequestException, Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { isEmpty } from 'lodash';

import { QueryDto } from './dto/query-dto';
import { Log } from './log.service';

@Controller()
export class AppController {
  constructor(private readonly log: Log) {}

  @Get('test')
  async test(@Req() req: Request, @Query() dto: QueryDto): Promise<any> {
    this.log.info(req.url);

    if (isEmpty(dto)) {
      throw new BadRequestException('Empty body is passed');
    }

    console.log('///////////////////////////////////');
    console.log('> userAgent');
    console.log(req.headers['user-agent']);
    console.log();
    console.log('> req.headers');
    console.log(req.headers);
    console.log();
    console.log('> req.query');
    console.log(req.query);
    console.log();
    console.log('> req.body');
    console.log(req.body);
    console.log('///////////////////////////////////\n');
  }
}
