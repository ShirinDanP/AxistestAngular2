import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieFormComponent {
    
  customer: Customer= new Customer();
      save(customerForm: NgForm) {
          console.log(customerForm.form);
          console.log('Saved: ' + JSON.stringify(customerForm.value));
      }

}
