/*
console.table(fruits); 
fruits.shift();
console.log(fruits);
fruits.unshift("Lemon","Pineapple");
console.table(fruits);*/
/*tomb3 = [[1,2,4],["I","II","III"],["igen","nem","aha"]];
console.table(tomb3);
tesiJegyek = [ ["Aladár",3],["Bécó",2],["Cecil",4,5,5,2,2,5]];
console.log(tesiJegyek);
const arr1 = ["aSD","MELEG"]
const arr2 = ["en","horcsog","miert"]
const en = arr1.concat(arr2);
console.log(en)
const fruits = ["Banana","Orange","Apple","Mango"];
let text = fruits.join(" xd ")
console.log(text)*/
/*osztaly ={
    Aladár:{
        tesi:5,
        matek:4
    },
    Ferenc:{
        tesi:3,
        matek:3
    },
    Emese:{
        tesi:5,
        matek:5
    },
    Bence:{
        tesi:2,
        matek:2
    }
};
console.table(osztaly);
osztaly.Denes={tesi:6,matek:6}
console.table(osztaly);*/
/*const fruits = ["Banana","Orange","Apple","Mango"];
for (let x of fruits.keys()) {
    console.log(fruits[x]);
}*/
function employee(name, jobtitle, born)
{
    this.name = name;
    this.jobtitle=jobtitle
    this.born = born
}

employee.prototype.salary= 200000;
 const fred = new employee("Ferenc","Ciganyvero",1969);
 console.log(fred)
 const Ricsikericsikericsike = new employee("Ricsikericsikericsike","ProfessionalGypsyCommander",2004)
 Ricsikericsikericsike.salary=69420
 console.log(Ricsikericsikericsike)