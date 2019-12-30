import { Component } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component.css']
})

export class secondComponent{
  private sub_one:string;
  private sub_two:string;
  private sub_three:string;

  constructor() {
    this.sub_one="React";
    this.sub_two="NodeJS";
    this.sub_three="MongoDB";
  }

  public getSubOne():string{
    return this.sub_one;
  }
  public getSubTwo():string{
    return this.sub_two;
  }
  public getSubThree():string{
    return this.sub_three;
  }
}