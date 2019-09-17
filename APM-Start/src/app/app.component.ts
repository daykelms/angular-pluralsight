import { Component } from '@angular/core';

//Decorator, parenthesis reference a function and curly bracets to an JS Object
@Component({
  selector: 'pm-root',
  template:`
  <div>
    <h1> {{pageTitle}}</h1>
      <div> My First Component </div>
  </div>
  `
})

// class
export class AppComponent { 
   pageTitle: string = 'Acme Product Mangement'
}