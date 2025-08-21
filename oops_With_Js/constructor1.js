class RailwayForm {
    constructor(givenName , mentionTrainNo , address){
          this.name = givenName;
        this.trainNo = mentionTrainNo;
        this.address = address;
    }
    preview(){
        alert("Name: " + this.name + "\nTrain No: " + this.trainNo + "\nAddress: " + this.address);
    }
    submit(){
       alert( this.name + " Form submitted for train no " + this.trainNo);
    }
    cancel(){
       alert(this.name + " Form cancelled for the train no " + this.trainNo);
       this.trainNo = null;
    }
}
let vishalForm = new RailwayForm("Vishal" , 14204 , "123 Street Name, City");
vishalForm.preview();
vishalForm.submit();
vishalForm.cancel();
vishalForm.preview(); // This will show trainNo as null after cancellation
vishalForm.submit(); // This will still work, but trainNo is null or loop whole