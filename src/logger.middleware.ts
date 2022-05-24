import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // express에서 사용하는 req,res,next 를 가져오면됨 2번 줄을 봐라!
  use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
