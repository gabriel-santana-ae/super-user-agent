import { Controller, Get, Req } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('test')
  async test(@Req() request: Request): Promise<any> {
    const userAgent = request.headers['user-agent'];
    console.log('///////////////////////////////////');
    console.log('userAgent');
    console.log(userAgent);
    console.log('///////////////////////////////////\n\n\n');
    console.log('///////////////////////////////////');
    console.log('request.headers');
    console.log(request.headers);
    console.log('///////////////////////////////////\n\n\n');
  }
}
