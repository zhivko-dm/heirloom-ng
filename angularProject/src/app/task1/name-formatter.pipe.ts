import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'nameFormatter'
})
export class NameFormatterPipe implements PipeTransform {

  transform(customer: Customer): string {
    /*
    TODO: takes customer as input, produces customer's full name as output
      full name is <First Name> <Middle Name (If present)> <Last Name>
    */

    return '';
  }

}
