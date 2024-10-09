import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth():string{
    return this.appService.getHealth();
  }

  @Post('sum')
  calculateSum(@Body('a') a: number, @Body('b') b: number):number{
    return this.appService.calculateSum(a,b);
  }
}
