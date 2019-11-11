class Employee {
  fname:string;
  lname:string;
  empId:number;
  contact:number;

  
  getFullName() : string {
    return this.fname + " " + this.lname + " " + this.contact + " " + this.empId;
  }

  constructor(fname:string, lname:string, contact:number, empId:number) {
    this.fname = fname;
    this.lname = lname;
    this.contact= contact;
    this.empId= empId;
  }
  
}

var obj = new Employee("john", "doe", 9810096175, 1234);
console.log(obj.getFullName());
