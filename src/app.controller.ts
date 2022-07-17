import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('message')
  @Redirect()
  getMessageList() {
    console.log('service has been run', `http://${process.env.JAVA_ENDPOINT}/message/list`);
    return { url: `http://${process.env.JAVA_ENDPOINT}:${process.env.JAVA_PORT}/message/list` }
  }
}
