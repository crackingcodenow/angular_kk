import { Component } from '@angular/core';

@Component({
  selector: 'third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent  {

  private var_three:string;
  constructor() { 
    this.var_three = "OracleDB in third component...";
  }
}
