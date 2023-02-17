import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component {

  /*
    TODO
    currently this component will not load, if you observe the console, you will notice that an error occurs
    Fix the error so the component loads successfully

    Once the component is able to load, use the CustomerService to get the customer and console.log the customer

  */

  constructor(private customerService: CustomerService) {}

}
