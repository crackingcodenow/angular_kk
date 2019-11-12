var Employee = /** @class */ (function () {
    function Employee(fname, lname, contact, empId) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.empId = empId;
    }
    Employee.prototype.getFullName = function () {
        return this.fname + " " + this.lname + " " + this.contact + " " + this.empId;
    };
    return Employee;
}());
var obj = new Employee("john", "doe", 9810096175, 1234);
console.log(obj.getFullName());
var obj2 = new Employee("peter", "popper", 9810091911, 5678);
console.log(obj2.getFullName());
