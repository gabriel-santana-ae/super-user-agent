import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { Log } from './log.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Log],
})
export class AppModule {}
