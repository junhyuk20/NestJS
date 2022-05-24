import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';

// @이를 이용한 '데코레이터' 키워드는 스프링에서의 '어노테이션'과 비슷하다.
//Controller( ) 인수를 넣게 되면 -> localhost:8000/cats 로 사용된다.
@Controller('cats') 
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Get( ) 인수를 넣게 되면 -> localhost:8000/cats/hello로 적용된다.
  @Get('hello/:id/:name')
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    console.log(`요청도착`);
    //console.log(req);
    console.log(Body);
    console.log(param);
    return this.appService.getHello();
  }
}
