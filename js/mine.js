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

let global = "58";

function calc(param1, param2, ...manyparam){
    // local 
    let localvir = "25";
   //content
    
  // return Math.round(param1 * param2);
  return manyparam;
}

// calc();

  console.log(calc(5,5, "asdas", 12, "2e"))
  console.log(calc(5,55))
  console.log(calc(13,6))
  console.log(calc(434.654,7))
  console.log(calc(5,8))


  let arrs = (myparam,sad) =>{
      console.log(myparam)
  }

  arrs("arrow param");


  let $ = el =>{
      return document.getElementById(el);
  }

  $('fundiv').innerHTML = "ფუნქცია კარგი რამეა"


  function ca(x, y){
      //return (x * y).toFixed();
     // return (x * y).toFixed(2);
      // return (x * y).toFixed(3);
  }

console.log(ca(25.857, 65,7))

function imgs(im){
    document.getElementById('img').innerHTML += `<img src="${im}">`
}

imgs('img/bg.jpg');

 
 

 function far(faren){
     return (5/9) * (faren -32);
 }

 console.log(far(50) + "c");


 let myglobal = 500;

 mygloba();


 function mygloba(){
    myglobal = 200;
 }




 console.log(myglobal);

 function changeText(msg){
     let changeg = msg.replaceAll('HTML', '')
     return changeg;
 }

 console.log(changeText('HTML არ არის პროგრამირების ენა'))

 function cards(){
     let cr = `<div class="card" style="width: 18rem;">
     <img src="..." class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`

   document.getElementById('fundiv').innerHTML = cr;
 }

 cards();

//  User Object

let User = {
    name:"ზურა",
    email:"zura@gmail.com",
    role:1,
    price:25,
    wieght:6.5545,
    img:"img/logo.png",
    active:true,
    changepw:true,
    usename: (objname)=>{
     return ( this.price *  this.wieght).toFixed() + "₾"; 
    }
}

Object.freeze(User); // ობიექტის გაყინვა (ცვლილებებს აღარ ასახავს)

User.changepw = false; // ობიექტის თვისების შეცვლა
delete User.role; // ობიექტის თვისების წაშლა 
User.mynames = "bla vla"; // ობიექტის თვისების ჩამატება

User.usename();

User["active"];
User.active;

let key = Object.keys(User);// აბრუნებს ობიექტის  ყველა თვისებას მასივის სახით
let value = Object.values(User);// აბრუნებს ობიექტის  ყველა მნიშვნელობას მასივის სახით
let allval = Object.entries(User);// აბრუნებს ობიექტის    ყველა თვისებას და მათ მნიშვნელობას
console.log(allval) 

for (const keys in User) {
   console.log(typeof User[keys]);
}