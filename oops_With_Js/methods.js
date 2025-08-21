class employee {
    constructor(name){
        this.name = name;
        console.log(` ${this.name} -: Employee's constructor is here`);
    }
    login(){
        console.log("Employee logged in");
    }
    logout(){
        console.log("Employee logged out");
    }
    requestLeave(leaveDays){
        console.log(`Employee requested ${leaveDays} leave: Approved only for ${leaveDays - 1} days`);
    }
}
class Manager extends employee {
    constructor(name) {
    super(name)
    console.log(`This is a newly written constructor`)
  }
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args) automatically passed
  //}

    approveLeave(leaveDays){
        console.log(`Manager approved ${leaveDays} leave days.`);
    }
    requestLeave(leaveDays){
        super.requestLeave(leaveDays + 1);
    }
}
let e = new Manager("John");// auto pass to employee
e.login();
e.requestLeave(5);
e.approveLeave(5);