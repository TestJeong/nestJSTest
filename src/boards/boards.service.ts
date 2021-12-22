import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';

@Injectable() // 다른 컴포넌트에서도 사용 할 수 있게 해준다
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
