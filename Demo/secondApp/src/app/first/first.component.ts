import { Component } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  private var_one:string;

  constructor() { 
    this.var_one = "MongoDB in first component...";
  }


}
