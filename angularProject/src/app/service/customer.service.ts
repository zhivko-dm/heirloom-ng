import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer';


export class CustomerService {

  constructor() { }

  getDefaultCustomer(): Observable<Customer>{
    const customer: Customer = {
      firstName: 'Bob',
      lastName: 'Smith',
      age: 45,
      currentBalance: 5000
    };
    return of(customer);
  }
}
