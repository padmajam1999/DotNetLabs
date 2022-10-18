var KpmgEmp = /** @class */ (function () {
    function KpmgEmp() {
    }
    ////
    KpmgEmp.prototype.WorkHoursClause = function () {
        console.log("".concat(this.EmpName, " should work for 8hrs a day for 5 days a week"));
    };
    KpmgEmp.prototype.CheckInTimeClause = function () {
        console.log("".concat(this.EmpName, " should check-in to the office by ").concat(this.ShiftStartTime));
    };
    return KpmgEmp;
}());
var Padyy = new KpmgEmp();
Padyy.EmpId = 1001;
Padyy.EmpName = "Padmaja Manikandan";
Padyy.Designation = "Analyst";
Padyy.ShiftStartTime = "9am";
Padyy.WorkHoursClause();
Padyy.CheckInTimeClause();
