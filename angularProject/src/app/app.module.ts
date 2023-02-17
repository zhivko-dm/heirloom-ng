import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { CustomerEntryComponent } from './task1/customer-entry/customer-entry.component';
import { CustomerListComponent } from './task1/customer-list/customer-list.component';
import { CustomerListItemComponent } from './task1/customer-list-item/customer-list-item.component';
import { ErrorComponent } from './task1/error/error.component';
import { NameFormatterPipe } from './task1/name-formatter.pipe';
import { Task3Component } from './task3/task3.component';
import { Task2Component } from './task2/task2.component';
import { ElementComponent } from './task2/element/element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    CustomerEntryComponent,
    CustomerListComponent,
    CustomerListItemComponent,
    ErrorComponent,
    NameFormatterPipe,
    Task3Component,
    Task2Component,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
