import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP'); //HTTP 관한 로거를 사용.

  // express에서 사용하는 req,res,next 를 가져오면됨 2번 줄을 봐라!
  use(req: Request, res: Response, next: NextFunction) {
    // 요청과 응답을 한번에 알 수있는 방법. res.on('finish')
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode}`,
        req.originalUrl,
      );
    });

    // console.log(req.ip); // 미들웨어 사용시 요청 ip 찍기
    // console.log(req.originalUrl);
    next();
  }
}
