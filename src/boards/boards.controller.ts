import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private borderService: BoardsService) {}

  @Get()
  getAllBoards() {
    return this.borderService.getAllBoards();
  }
}
 