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


function cards(){
    let cr = `<div class="card" style="width: 18rem;">
    <img src="${User.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

  document.getElementById('fundiv').innerHTML = cr;
}

cards();

Object.freeze(User); // ობიექტის გაყინვა (ცვლილებებს აღარ ასახავს)

User.changepw = false; // ობიექტის თვისების შეცვლა
delete User.role; // ობიექტის თვისების წაშლა 
User.mynames = "bla vla"; // ობიექტის თვისების ჩამატება

User.usename();

// User["active"];
// User.active;

// let key = Object.keys(User);// აბრუნებს ობიექტის  ყველა თვისებას მასივის სახით
// let value = Object.values(User);// აბრუნებს ობიექტის  ყველა მნიშვნელობას მასივის სახით
// let allval = Object.entries(User);// აბრუნებს ობიექტის    ყველა თვისებას და მათ მნიშვნელობას
// console.log(allval) 

// for (const keys in User) {
//    console.log(typeof User[keys]);
// }

let Classroom = ["ალექსი", "დავით", "ზურა", "გიორგი", "სალომე", "ნიკა", "ბექა"];
let Nums = [1, 7, 9,  55, 777, 998, 15000, 4,897987, 54,33,7441,8789];
 
//   Nums.forEach(el=>{
//     console.log(el + " ტესტი ") 
//  })

let newArr =  Nums.every(el=>{
    return el > 0 
 })
 
  console.log(newArr);

//  for(let s = 0; s < Classroom.length; s++){
//  console.log(Classroom[s])
//  }

 /* array method ==== 

Classroom.unshift(52); ამატებს  ახალ ელემენტს მასივის დასაწყისში
Classroom.push(52); ამატებს  ახალ ელემენტს მასივის ბოლოს
Classroom.shift(); // შლის მასივის პირველ ელემენტს
Classroom.pop(); // შლის მასივის ბოლო  ელემენტს
Classroom.splice(2, 0, 'ზურიკელა', 'ზურიკელა2') ამატებს და შლის ელემენტებს
Classroom.slice(2); ელემენტის წაშლა (მარცხნიდან);
 Classroom.sort(); მასივის სორტირება ა-ბ
 Classroom.sort().reverse(); მასივის სორტირება ბ-ა

 Nums.sort(function(a,b){
    return a - b;
}) // რიცხვების სორტირება ზრდადობით 

Classroom.find(el=>{
     return  el == "დავითs";
 }) ეძებს გადაცემული პირობის მიხედვით და გვიბრუნებს პირველივე შედეგს


 Nums.filter(el=>{
     return  el > 50 && el < 1000;
 }) ეძებს გადაცემული პირობის მიხედვით და ქმნის ახალ მასივს


//   Nums.forEach(el=>{
//     console.log(el + " ტესტი ") 
//  }) // ბეჭდავს მასივის თითეულ ელემენტს  (არ ქმნის ახალ მასივს)

let newArr =  Nums.map(el=>{
    return el + " ტესტი "  
 })  // ბეჭდავს მასივის თითეულ ელემენტს  (ქმნის ახალ მასივს)

 Classroom.includes('ზურაs') // ამოწმებს გვაქვს თუ არა შესაბამისი ელემენტი აბრუნებს boolean

 Nums.some(el=>{
    return el > 1000000 
 }) //ამოწმებს ერთ ერთი წევრი თუ მაინც აასრულებს პირობას  აბრუნებს boleean 


 Nums.every(el=>{
    return el > 0 
 }) //ამოწმებს ყველა წევრი თუ   აასრულებს პირობას  აბრუნებს boleean 

 ==== */

 let Blogs = [
     {
       title:"ვებმა თავის ორბიტას მიაღწია — რატომ გაგზავნეს ის L2 წერტილში და როგორ იმოძრავებს",
       descr:"ჯაშუშობისა და ღალატის ბრალდებით დაკავებული აზერბაიჯანელი ჟურნალისტი, ფოლად ასლანოვი რამდენიმე დღეა ციხეში შიმშილობს. მისი ცოლის, გულმირა ასლანოვას განცხადებით, ყოველკვირეულ სატელეფონო ზარებზე უარის თქმის შემდეგ, მან თვითდაზიანება მიიყენა — სატელეფონო ზარის მოთხოვნა მხოლოდ ამის შემდეგ დაუკმაყოფილეს.",
       img:"https://joey.on.ge/2022/01/24/JWST2.jpg",
       created:"2022-01-20",
       views:150,
     },

     {
        title:"პატიმრობაში მყოფმა მოშიმშილე აზერბაიჯანელმა ჟურნალისტმა თვითდაზიანება მიიყენა",
        descr:"ჯაშუშობისა და ღალატის ბრალდებით დაკავებული აზერბაიჯანელი ჟურნალისტი, ფოლად ასლანოვი რამდენიმე დღეა ციხეში შიმშილობს. მისი ცოლის, გულმირა ასლანოვას განცხადებით, ყოველკვირეულ სატელეფონო ზარებზე უარის თქმის შემდეგ, მან თვითდაზიანება მიიყენა — სატელეფონო ზარის მოთხოვნა მხოლოდ ამის შემდეგ დაუკმაყოფილეს.",
        img:"https://rachel.on.ge/2016/12/27/iStock_74516649_XLARGE.jpg",
        created:"2022-01-20",
        views:3500,
      },

      {
        title:"მფრინავი მანქანა რომელსაც პილოტის ლიცენზია არ სჭირდება — გაიცანით შვედური სტარტაპი",
        descr:"ჯაშუშობისა და ღალატის ბრალდებით დაკავებული აზერბაიჯანელი ჟურნალისტი, ფოლად ასლანოვი რამდენიმე დღეა ციხეში შიმშილობს. მისი ცოლის, გულმირა ასლანოვას განცხადებით, ყოველკვირეულ სატელეფონო ზარებზე უარის თქმის შემდეგ, მან თვითდაზიანება მიიყენა — სატელეფონო ზარის მოთხოვნა მხოლოდ ამის შემდეგ დაუკმაყოფილეს.",
        img:"https://monica.on.ge/2022/01/21/Jetson_Pilot_61ea9799ada82.jpg",
        created:"2021-01-25",
        views:5,
      },

      {
        title:"ბილ გეიტსი ბევრად უფრო საშიშ ვირუსებზე გვაფრთხილებს, ვიდრე ეს კორონავირუსია",
        descr:"ჯაშუშობისა და ღალატის ბრალდებით დაკავებული აზერბაიჯანელი ჟურნალისტი, ფოლად ასლანოვი რამდენიმე დღეა ციხეში შიმშილობს. მისი ცოლის, გულმირა ასლანოვას განცხადებით, ყოველკვირეულ სატელეფონო ზარებზე უარის თქმის შემდეგ, მან თვითდაზიანება მიიყენა — სატელეფონო ზარის მოთხოვნა მხოლოდ ამის შემდეგ დაუკმაყოფილეს.",
        img:"https://rachel.on.ge/2016/12/27/iStock_74516649_XLARGE.jpg",
        created:"2022-01-26",
        views:63,
      },

      {
        title:"ჯეფ ბეზოსი დაბერების წინააღმდეგ — მილიარდერმა მსოფლიოს წამყვანი მეცნიერები შემოიკრიბა",
        descr:"ჯაშუშობისა და ღალატის ბრალდებით დაკავებული აზერბაიჯანელი ჟურნალისტი, ფოლად ასლანოვი რამდენიმე დღეა ციხეში შიმშილობს. მისი ცოლის, გულმირა ასლანოვას განცხადებით, ყოველკვირეულ სატელეფონო ზარებზე უარის თქმის შემდეგ, მან თვითდაზიანება მიიყენა — სატელეფონო ზარის მოთხოვნა მხოლოდ ამის შემდეგ დაუკმაყოფილეს.",
        img:"https://monica.on.ge/2022/01/21/l55820210907183159.jpg",
        created:"2022-07-25",
        views:9631,
      },

 
 ]


//  let sortarray = Blogs.sort((a,b)=>{
//      return  b.views - a.views
//  })

// sortarray = Blogs.filter(el=>{
//     return el.views > 1000
// })

 
loaddata(Blogs);

let search = document.querySelector('.searched');

search.addEventListener('click', function(){
    let text = document.querySelector('#text').value;
    let date = document.querySelector('#date').value;

    let fillblog;

    if(text !== ''){
        fillblog = Blogs.filter(elment=>{
        return !elment.title.search(text)
    })
    }

    if(date !== ''){
      
        fillblog = Blogs.filter(elment=>{
 
            console.log(date,  elment.created)
         
        return  elment.created == date
    })
    }

  
    
    loaddata(fillblog);

})


function loaddata(arr){
    document.getElementById('load').innerHTML = '';


    arr.forEach(el=>{
        let card = `<div class="col-lg-4 mb-3"> <div class="card">
        <img src="${el.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.title}</h5>
          <p class="card-text"> ${el.descr}</p>
          <p class="btn btn-primary"> ნახვების რაოდენობა ${el.views}</p>
         </div>
        </div>
      </div>`;
    
      document.getElementById('load').innerHTML += card;
    
    })
}