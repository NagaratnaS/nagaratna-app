import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateToAge'
})
export class DateToAgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): String {

    let today = moment();
    //let birthdate = moment(value,"DD/MM/YYYY").year();
    //let years = today.diff(birthdate, 'years');
    console.log(value);
    //let html:string = years + " yr ";

   // html += today.subtract(years, 'years').diff(birthdate, 'months') + " mo";


    return "html";
  }

}
