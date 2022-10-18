class employee {
    public name: string;
    public EmpId: number;
    public designation: string;
    public Email: string;
    protected Salary: number;


    public works(...tasks: string[]) {
        console.log(this.name + " with emplyee Id : " + this.EmpId + " and email as : " + this.Email + " works on the following tasks ");
        for (var i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
        }
    }

    public LeaveOff(days: number) {
        console.log(this.name + " designated as : " + this.designation + " , has taken " + days + " days of leave ");
    }

    public AssignIncrement(salary: number) {
        this.Salary = salary;
    }

    public ShowSalary(Income: number) {
        this.Salary = Income;
        console.log(Income);
    }


}

class Admin extends employee {
    public PrintIncrement() {
        console.log(this.name + " has a salary of :" + this.Salary + " has received a total increment of :");
        if (this.Salary > 100000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 3000");
        }
    }
    public AssignWork(...project: string[]) {
        console.log(this.name + " has assigned the following project :");
        for (var j = 0; j < project.length; j++) {
            console.log(project[j]);
        }
    }
}

var manager = new Admin();
manager.name = "Swati";
manager.EmpId = 45324;
manager.designation = "associate consultant"
manager.Email = "cfdcrs@kpmg.com";
manager.works("testing", "audit");
manager.LeaveOff(3);
manager.AssignIncrement(25000);
manager.PrintIncrement();
manager.AssignWork("deployment");
manager.ShowSalary(5500000);

var auditer = new Admin();
auditer.name = "Shamitha";
auditer.EmpId = 45876;
auditer.designation = "consultant"
auditer.Email = "abcd@kpmg.com";
auditer.works("development", "tax", "training");
auditer.LeaveOff(8);
auditer.AssignIncrement(250000);
auditer.PrintIncrement();
auditer.AssignWork("advisory", "testing", "marketing");
auditer.ShowSalary(1000000);

var shivangi = new employee();
shivangi.name = "Shivangi Verma";
shivangi.EmpId = 11111;
shivangi.designation = "Analyst";
shivangi.Email = "shivi.2000@gmail.com";
shivangi.works("Adv Tech", "QA");
shivangi.LeaveOff(5);
shivangi.ShowSalary(26000);

var padmaja = new employee();
padmaja.name = "Padmaja Manikandan";
padmaja.EmpId = 115923;
padmaja.designation = "Analyst";
padmaja.Email = "paddy@gmail.com";
padmaja.works("QA", "tax-tech");
padmaja.LeaveOff(4);
padmaja.ShowSalary(400000);