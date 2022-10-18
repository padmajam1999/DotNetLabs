interface IEmpContract { 
    WorkHoursClause(); 
CheckInTimeClause();
}

class KpmgEmp implements IEmpContract {
    public EmpId: number;
    public EmpName: string;
    public Designation: string;
    public ShiftStartTime: string;
    ////
    WorkHoursClause() {
        console.log(`${this.EmpName} should work for 8hrs a day for 5 days a week`);
    }
        CheckInTimeClause() {
            console.log(`${this. EmpName} should check-in to the office by ${this.ShiftStartTime}`);
        }
}

var Padyy = new KpmgEmp();
Padyy.EmpId = 1001;
Padyy.EmpName = "Padmaja Manikandan"; 
Padyy.Designation = "Analyst";
Padyy.ShiftStartTime = "9am";
Padyy.WorkHoursClause();
Padyy.CheckInTimeClause();