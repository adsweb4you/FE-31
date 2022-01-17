let title, mytitle, tutle2;

title = "სხვა მნიშნელობა"; // ok

mytitle = "ჩემი მეორე ცვლადი";

tutle2;


let str = 'ჩემი მესამე ცვლადი213213_+_-';   //String
let num = 25; //Number
let obj = {name:"blabla"}; //object
let arr = [1,5,8885,"asd"]; //array
let func = function(){}; //function
let bool = true; // boolean
let fl = false; // boolean
let undd = undefined; //undefined
let Nans = NaN; //NaN
let nulls = null;  //null


document.getElementById('output').innerHTML = mytitle;

console.log(typeof arr);

console.log(Array.isArray(obj))


let mystr = "მე ვსწავლობ , iT    step academy,  ვსწავლობ , iT" ;

 

console.log(mystr.split(","))

/* =====
mystr.length // გვითვლის სტრინგის სიმბოლოების რაოდენობას
mystr.search('@') // ეძებს სტრინგის შიგნით არსებულ სიმბოლოს (აბრუნებს ინდექს)
mystr.lastIndexOf('@') // ეძებს სტრინგის შიგნით არსებულ სიმბოლოს (აბრუნებს ინდექს) იწყებს ძებნას მარჯვნიდან
mystr.includes('@') // ეძებს სტრინგის შიგნით არსებულ სიმბოლოს (აბრუნებს boolean)
mystr.slice(2, -2) // ჭრა სტრინგის შიგნით
mystr.replaceAll('ვსწავლობ', '******') // სტრინგში სიმბოლოების ჩანაცვლება
mystr.toLowerCase() // ყველა ასოს დაპატარავება
mystr.toUpperCase() // ყველა ასოს გადიდება
mystr.match(/it/gi) // ეძებს სტრინგის შიგნით სიმბოლოებს და გადაყავს მასივში
mystr.split("|") // გადაცემული პარამეტრის მიხედვით გადაყავს სტრინგი მასივში
====== */


function typing(text){
    let content = document.querySelector('#msg').innerText;
    msg.innerHTML = content.replaceAll(text, "<span class='highl'>"+text+"</span>")
}

let img = "img/bg.jpg";

// document.getElementById('myimg').innerHTML = "<img src='"+img+"' >"
document.getElementById('myimg').innerHTML = `<img src="${img}" >`;

let x = 25.62485;
let y = 7;

let sum = x + y;

let ran = Math.random() * 20;

console.log(Math.round(ran));

let t = "5";
let n = 5;

console.log(Number(t) + n.toString())