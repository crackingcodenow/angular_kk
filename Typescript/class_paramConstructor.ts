class hotels {
  private sub_one:string;

  constructor(private para1:string) {
    this.sub_one = para1;
  }

  public getSub():string {
    return this.sub_one;
  }
}

let obj1 = new hotels("Angular");
console.log(obj1.getSub());


