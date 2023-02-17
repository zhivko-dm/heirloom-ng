import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component{

  /*
    TODO
    Query the dom for the container element (marked as #container) and the template (marked as #template)
    When the 'add element' button is clicked, add an ElementComponent

    implement the methods listed to manipulate the DOM

  */


  constructor(private resolver: ComponentFactoryResolver) { }


  addElement(): void{
  }

  addTemplate(): void{
  }

  removeLastAdded(): void{
  }

}
