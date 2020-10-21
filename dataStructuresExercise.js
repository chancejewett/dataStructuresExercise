//1a

const jedi=[];
console.log(jedi)

//1b

jedi[0] = "luke";
console.log(jedi)

//1c

jedi.push("obi-wan kenobi");

//1d

jedi.unshift("yoda");
console.log(jedi)

//1e

console.log(jedi[1]);
console.log(jedi)
//1f

jedi.pop();
console.log(jedi);


//1g
jedi.shift();
console.log(jedi);


//2a
const sythlords=["Darth vader","Darth Sidious","Darth Maul"];

//2b
const imperialOfficers=["Grand Moff Tarkin","Orson Krennic",];

//2c
const starWarsVillains = sythlords.concat(imperialOfficers);
console.log(starWarsVillains);

//2d
starWarsVillains.slice(0,2);
console.log(starWarsVillains);

//3a
const droids={astromech: "R2-D2",protocol: "C-3PO",assassin: "IG-88"};
//3b
console.log(droids["astromech"]);
//3c
console.log(droids.protocal);
console.log(droids);

//3d
droids.assassin= "IG-11";
console.log(droids);