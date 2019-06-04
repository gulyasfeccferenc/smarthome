import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysqlDatePipe'
})
export class MysqlDatePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.warn(value);
    if (value) {
      const convertedValue = value.toString();
      // console.error(value);
      // console.error(convertedValue);
      return new Date(convertedValue.replace(
        /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/,
        '$4:$5:$6 $2/$3/$1'
      ));
    } else return new Date();

  }

}
