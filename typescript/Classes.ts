class person {
    // properties
    public name: string;
    public age: number;
    public email: string;
    private secrets: string;
    protected Income: number;

    // functions=methods=operations
    public eat(...food: string[]) {
        console.log(this.name + " likes to eat the following: ");
        for (var i = 0; i < food.length; i++) {
            console.log(food[i]);
        }
    }

    public AssignIncome(income: number) {
        this.Income = income;  //to assign the value to the protected property
    }
}

class ITofficer extends person {
    public PrintTotalRefund() {
        console.log(this.name + " has received a total refund of ");
        if (this.Income > 300000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 3000");
        }
    }
}

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
