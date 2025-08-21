let a = {
    name : "johan",
    age : 25,
    city : "New York",
    run: () => {
       alert("first run");
    }

}
let p = {
    run: () => {
       alert("second run");
    }
}
p.__proto__= {
   birthPlace: "USA",
   father: "harry",
}

a.__proto__= p;
console.log(a);
a.run(); // This will call the run method from the prototype p
a.birthPlace = "Canada"; // This will not change the prototype's birthPlace
console.log(a.birthPlace); // This will log "Canada" since it's a property of 'a'
console.log(a.father); // This will log "harry" since it's inherited from the prototype