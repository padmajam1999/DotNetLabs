var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person() {
    }
    // functions=methods=operations
    person.prototype.eat = function () {
        var food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            food[_i] = arguments[_i];
        }
        console.log(this.name + " likes to eat the following: ");
        for (var i = 0; i < food.length; i++) {
            console.log(food[i]);
        }
    };
    person.prototype.AssignIncome = function (income) {
        this.Income = income; //to assign the value to the protected property
    };
    return person;
}());
var ITofficer = /** @class */ (function (_super) {
    __extends(ITofficer, _super);
    function ITofficer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITofficer.prototype.PrintTotalRefund = function () {
        console.log(this.name + " has received a total refund of ");
        if (this.Income > 300000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 3000");
        }
    };
    return ITofficer;
}(person));
var auditor = new ITofficer();
auditor.name = "Swati";
auditor.eat("pasta");
auditor.AssignIncome(1000000);
auditor.PrintTotalRefund();
/*
var Jon = new Person();
Jon.Name = "Jon";
Jon.Email = "jon@abc.com";
Jon.Eat("Junk food", "Pastas");

var Bob = new Person();
Bob.Name = "Bob";
Bob.Email = "bob@gmail.com";
Bob.Eat("Baby food", "fruits");
*/
