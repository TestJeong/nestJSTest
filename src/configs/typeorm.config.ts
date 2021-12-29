import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 8000,
  username: 'postgres',
  password: 'asdzxc56',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티를 이용해서 데이터베이스 테이블을 생성해줍니다 그래서 엔티티 파일이 어디에 있는지 설정해준다
  synchronize: true, // true값을 주면 애플리케이션을 다시 실행할 떄 엔티티안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 drop한 후 다시 생성해줍니다.
};
