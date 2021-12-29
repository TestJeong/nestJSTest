import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/border-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private borderService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.borderService.getAllBoards();
  }
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
    // 유효성 체크
    return this.borderService.createBoard(CreateBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.borderService.getBoardById(id);
  }

  @Delete('/:id')
  deleterBoard(@Param('id') id: string): void {
    this.borderService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.borderService.updateBoardStatus(id, status);
  }
}
