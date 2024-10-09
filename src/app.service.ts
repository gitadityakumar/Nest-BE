import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from nest backend!';
  }

  getHealth():string {
    return "Everything is Healthy"
  }

  calculateSum(a:number,b:number):number {
      return a+b;

  }
}

