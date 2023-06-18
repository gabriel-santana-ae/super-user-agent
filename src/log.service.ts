import { Injectable } from '@nestjs/common';

enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

@Injectable()
export class Log {
  private getLinePrefix(level: LogLevel): string {
    return `[${new Date().toISOString().replace('T', ' ').replace('Z', '')}] [${level}]`;
  }

  public info(msg: string): void {
    console.log(`${this.getLinePrefix(LogLevel.INFO)} ${msg}`);
  }

  public warn(msg: string): void {
    console.warn(`${this.getLinePrefix(LogLevel.WARN)} ${msg}`);
  }

  public error(msg: string): void {
    console.error(`${this.getLinePrefix(LogLevel.ERROR)} ${msg}`);
  }
}
