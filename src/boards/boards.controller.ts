import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/border-status-validation.pipe';

// boards에 관한 컨트롤러이며 borards에 관련된 요청이 들어오면 아래의 컨트롤러에서 처리가 된다
@Controller('boards')
export class BoardsController {
  constructor(private borderService: BoardsService) {}

  // @Get('/')
  // getAllBoards(): Board[] {
  //   return this.borderService.getAllBoards();
  // }
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
  //   // 유효성 체크
  //   return this.borderService.createBoard(CreateBoardDto);
  // }
  @Get()
  getAllBoard(): Promise<Board[]> {
    return this.borderService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
    return this.borderService.createBoard(CreateBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.borderService.getBoardById(id);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.borderService.getBoardById(id);
  // }

  @Delete('/:id')
  deleterBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.borderService.deleteBOard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.borderService.upstateBoardStatus(id, status);
  }
}
