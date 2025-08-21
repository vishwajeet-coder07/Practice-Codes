//what is constructor?
//A constructor is a special method of a class that is called when an object of the class is instantiated.


// Constructor is used to initialize objects and it is called automatically when a new instance of the class is created.

class RailwayForm {
    constructor(givenName , mentionTrainNo){
          this.name = givenName;
        this.trainNo = mentionTrainNo;
    }
    submit(){
       alert( this.name + " Form submitted for train no " + this.trainNo);
    }
    cancel(){
       alert(this.name + " Form cancelled for the train no " + this.trainNo);
    }
}
//  Create & fill a form for Harry
 let harryForm = new RailwayForm("Harry" , 14201);


 //  Create & fill a form for Rohan
 let rohanForm1 = new RailwayForm("Rohan" , 14202);
let rohanForm2 = new RailwayForm("Rohan" , 14203);


 harryForm.submit();
 rohanForm1.submit();
 rohanForm2.submit();
 rohanForm2.cancel();