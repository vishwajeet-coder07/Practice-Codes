class RailwayForm {
    submit(){
       alert( this.name + " Form submitted for train no " + this.trainNo);
    }
    cancel(){
       alert(this.name + " Form cancelled for the train no " + this.trainNo);
    }
    fill( givenName , mentionTrainNo){
        this.name = givenName;
        this.trainNo = mentionTrainNo;
    }
}
//  Create a form for Harry
 let harryForm = new RailwayForm();
 // Fill the form for Harry
 harryForm.fill("Harry" , 14201);

 //  Create a form for Rohan
 let rohanForm1 = new RailwayForm();
let rohanForm2 = new RailwayForm();
 // Fill the form for Rohan
 rohanForm1.fill("Rohan" , 14202);
 rohanForm2.fill("Rohan" , 14203);

 harryForm.submit();
 rohanForm1.submit();
 rohanForm2.submit();
 rohanForm2.cancel();