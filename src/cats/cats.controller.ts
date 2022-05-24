import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return `all cat`;
  }
  //동적 라우팅
  @Get(':id')
  getOneCat() {
    return `one cat`;
  }

  @Post()
  createCat() {
    return `create cat`;
  }

  //동적 라우팅
  @Put(':id')
  updateCat() {
    return 'update cat';
  }
  //동적 라우팅
  @Patch(':id')
  updatePartialCat() {
    return `update`;
  }
  //동적 라우팅
  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
