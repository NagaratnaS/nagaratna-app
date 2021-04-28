import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSort'
})
export class NameSortPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): any {

     return value.sort((a, b) => a.name.localeCompare(b.name));
    // return value.sort((a, b) => {
    //   console.log(value);
    //   let x = a.name.toLowerCase();
    //   let y = b.name.toLowerCase();
    //   if (x < y) {
    //     return -1;
    //   }
    //   else {
    //     return 1;
    //   }
    // });
  }

}
