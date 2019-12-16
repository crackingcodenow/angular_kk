var hotels = /** @class */ (function () {
    function hotels(para1) {
        this.para1 = para1;
        this.sub_one = para1;
    }
    hotels.prototype.getSub = function () {
        return this.sub_one;
    };
    return hotels;
}());
var obj1 = new hotels("Angular");
console.log(obj1.getSub());
