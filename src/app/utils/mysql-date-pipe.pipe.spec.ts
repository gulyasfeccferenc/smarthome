import { MysqlDatePipePipe } from './mysql-date-pipe.pipe';

describe('MysqlDatePipePipe', () => {
  it('create an instance', () => {
    const pipe = new MysqlDatePipePipe();
    expect(pipe).toBeTruthy();
  });
});
