import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent {

  /*
  TODO
    1. utilize Angular forms API to bind to the form fields for entering a customer
    2. when save button is clicked, extract data from the form and emit the created customer then clear the form.
      if invalid data entered, don't emit anything
    3. Validate the following:
      - first name field is required
      - age must be between 18-60
      - template file contains instructions on displaying the error


  */
 formGroup: FormGroup;


  constructor() {}
}
