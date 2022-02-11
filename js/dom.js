// let byid = document.getElementById("mypid"); // გვისელექტებს id მიხედვით აბრუნებს ობიექტს
// let byclass = document.getElementsByClassName("ptag"); // გვისელექტებს class მიხედვით აბრუნებს ობიექტს რომლის ველიუ არის მასივი
// let bytag = document.getElementsByTagName('p');  // გვისელექტებს tag მიხედვით აბრუნებს ობიექტს რომლის ველიუ არის მასივი

// let quer = document.querySelector('#mypid'); //გვისელექტებს css სელექტორით ობიექტს
// let querAll = document.querySelectorAll('p'); //გვისელექტებს css სელექტორით array


// quer.addEventListener('click', changers)


// function changers(){
//     quer.innerText  = ``;
// }

// let rembtn = document.querySelector('.btnremove');

// function remiven(){
//     quer.removeEventListener('click', changers )
// }

 

// // quer.onclick = function(){
// //     this.innerHTML  = "ცვლილება ";
// // }


// // let c = 1;
// // querAll.forEach(p=>{
// //     p.addEventListener('mouseenter', function(e){
// //         console.log(e);
// //         this.innerHTML  = "ცვლილება "  + c;
// //         if(c  < 10){
// //            c++;  
// //         }
       
// //     })
   
// // })

// // querAll.forEach(el=>{
// //     el.innerHTML = "html მნიშვნელობა"
// // })

// // for (const key of bytag) {
// //     key.innerHTML =  "ჩანაცვლებული მნიშვნელობა"
// // }

// // for (let i = 0; i < byclass.length; i++) {
// //     const element = byclass[i];
// //     element.innerHTML =  "ჩანაცვლებული მნიშვნელობა"
// // }

// //byclass[1].innerHTML = "ჩანაცვლებული მნიშვნელობა"


// let plus = document.querySelector('.incr');
// let minus = document.querySelector('.decr');
// let inntext = document.querySelector('.out');
// let calcs = document.querySelector('.calcs');
// let s = 1;
// plus.addEventListener('click', function(){
//     inntext.innerText = ++s;

//     //  calcs.classList.add('new-class', 'sm') // კლასის დამატება
//    //  calcs.classList.remove('bg-danger') // კლასის წაშლა
//   //  calcs.classList.toggle('new-class') // კლასის წაშლა/მინიჭება
//  // calcs.classList.replace('bg-danger', 'bg-succes') // // კლასის ჩანაცვლება

//   console.log(calcs.classList.contains('bg-dangers'))

// })


// minus.addEventListener('click', function(){
//     if(s > 1){
//          inntext.innerText = --s
//     }
   
// })

// let btn = document.querySelector('.sidebtn');
// let bar = document.querySelector('.sidebar');

// btn.addEventListener('click', function(){
//     bar.classList.toggle('show')
//     btn.classList.toggle('show')
// })
 

// let mybtns = document.querySelector('.attrbtn');
// let inputs = document.querySelector('.attr input');

// mybtns.disabled=true;

// inputs.oninput = function(){
//     if(this.value.length > 0){
//         mybtns.disabled=false;
//     }else{
//         mybtns.disabled=true;
//     }
// }

// let User = {
//     email:"admin@gmail.com",
//     pass:"123123",
// }

// let cou = 0;

// mybtns.onclick = function(e){
//     e.preventDefault();
//     css(msg, {
//         display:"none"
//     })
//     let email = document.querySelector('[name="user"]');
//     let pass = document.querySelector('[name="pass"]')
   
//     if(email !== User.email && pass !== User.pass){
//         if (cou >= 3) {
//             this.disabled = true;
//             msg.innerText = "თქვენ დაგებლოკათ ანგარიშ!";

//             setTimeout( function(){
//                 mybtns.disabled = false;
//                 msg.innerText = "თქვენ ანგარიში განიბლოკა";
//                 cou = 0;
//             }, 4000)

//         }
//        css(msg, {
//            display:"block"
//        })
//         cou++;
//     }else{
//         window.location.reload();
//     }

//       //     inputs.getAttribute('type') აბრუნებს ატრიბუტის მნიშვნელობას 
//      //      inputs.type აბრუნებს ატრიბუტის მნიშვნელობას (შემოკლება)
//     //       inputs.setAttribute('disabled', true) ატრიბუტის მინიჭება
//    //        inputs.disabled = true; ტრიბუტის მინიჭება  (შემოკლება)
//   //         inputs.type =  inputs.type ==  "text" ?   'password' : 'text'    ტრიბუტის განახლება 
//  //          inputs.toggleAttribute('disabled') ატრიბუტის toggle
//  // inputs.removeAttribute('disabled') // ატრიბუტის წაშლა
 
//     // inputs.style.backgroundColor =;
//     // inputs.style.color = "#fff"
//     // inputs.style.borderRadius = "20px"

//     // css(inputs, {
//     //     backgroundColor: "red",
//     //     color: "#fff",
//     //     borderRadius: "20px",
//     //     padding:"20px",
//     //     border:"0"
//     // })
// }

 

// function css(selector, styleobj){
//     for (const key in styleobj) {
//       const prop = key;
//       const val =  styleobj[key];
//       selector.style[prop] = val;
//     }
// }

//  let togler = document.querySelector('.rounded-fill');
//  let form = document.querySelector('.myforms');

//  togler.addEventListener('click', function( ){
//     togler.innerText = togler.innerText == "რეგისტრაცია" ? 'შესვლა' : 'რეგისტრაცია';
//     form.classList.toggle('slider')
//  })

 

// let div  = document.createElement('div')
// div.classList.add('bg-danger');
// div.textContent = "ჩემი პირველი გენერირებული html";


// let h1 = document.createElement('h1');
// h1.textContent = "h1 ტეგი";

// div.prepend(h1)

// forms.appendChild(div)

// console.log(div);


// let ou = document.querySelector('#inputout');
//  document.querySelector('.btn-danger').onclick = function(){
//      let input = document.createElement('input');
//      input.classList.add('form-control', 'mb-3');
//      ou.prepend(input)

//      input.addEventListener('click', function(){
//        this.remove()
//     })

//  };

 let forms = document.querySelector('form.ronded');
 let outs = document.querySelector('.flexss');

 let index = 0;

 forms.addEventListener('submit', function(e){
    e.preventDefault();
   let val = document.querySelector('#tagvalue'); // ინფუთის ველიუ

   let tags = document.createElement('span'); // თეგის შექმნა
   let i = document.createElement('i'); // წასაშლელი აიქონის შექმნა
   i.classList.add('bi', 'bi-x-circle', 'ms-2');  // წასაშლელი აიქონზე კლასის მინიჭება  
   i.setAttribute('data-id', index) // წასაშლელი index   მინიჭება  
   tags.classList.add('mytag');  // თეგზე კლასის მინიჭება

   tags.id = `index${index}` // თეგზე წაშალილი უნიკალური id მინიჭება
   tags.innerText =  val.value // თეგზე ტექსტში ინფუთიდან მიღებული ტექსტის მინიჭება
   tags.appendChild(i)  // წასაშლელი აიქონის შეტანა თეგში
   val.value = '' // ენთერის შემდეგ ველიუს გასუფთავება
   outs.prepend(tags) // შექმნილი თეგის გამოტანა html
   index++; 


   i.addEventListener('click', function(){
     //  let id = this.getAttribute('data-id'); // აიდის წამოღება
     //  document.querySelector('#index'+id).remove() // აიდი მიხედვით ელემენტის წაშლა
     this.parentElement.remove();
   })

 })

 

let children = document.querySelector('.minep');
let parent = document.querySelector('.col-lg-4');
// children.parentElement  აბრუნებს მშობელ ელემენტს 
// parent.children აბრუნებს ელემენტის შვილობილ ელემენტებს
// children.nextElementSibling აბრუნებს ქვედა მეზობელს
// children.previousElementSibling //  აბრუნებს ზედა მეზობელს
 

let prev = document.querySelector('.btn-danger');
let next = document.querySelector('.btn-success');
let p = document.querySelectorAll('.col-lg-4 p');

// next
next.addEventListener('click', function(){
   let active = document.querySelector('p.active');
   active.classList.remove('active');
   if (active.nextElementSibling != null) {
      active.nextElementSibling.classList.add('active')
   }else{
     p[0].classList.add('active')
  
   }
  
})


// next
prev.addEventListener('click', function(){
  let active = document.querySelector('p.active');
  active.classList.remove('active');
  if (active.previousElementSibling != null) {
     active.previousElementSibling.classList.add('active')
  }else{
    p[p.length - 1].classList.add('active')
 
  }
 
})