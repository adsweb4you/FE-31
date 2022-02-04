let byid = document.getElementById("mypid"); // გვისელექტებს id მიხედვით აბრუნებს ობიექტს
let byclass = document.getElementsByClassName("ptag"); // გვისელექტებს class მიხედვით აბრუნებს ობიექტს რომლის ველიუ არის მასივი
let bytag = document.getElementsByTagName('p');  // გვისელექტებს tag მიხედვით აბრუნებს ობიექტს რომლის ველიუ არის მასივი

let quer = document.querySelector('#mypid'); //გვისელექტებს css სელექტორით ობიექტს
let querAll = document.querySelectorAll('p'); //გვისელექტებს css სელექტორით array


quer.addEventListener('click', changers)


function changers(){
    quer.innerText  = ``;
}

let rembtn = document.querySelector('.btnremove');

function remiven(){
    quer.removeEventListener('click', changers )
}

 

// quer.onclick = function(){
//     this.innerHTML  = "ცვლილება ";
// }


// let c = 1;
// querAll.forEach(p=>{
//     p.addEventListener('mouseenter', function(e){
//         console.log(e);
//         this.innerHTML  = "ცვლილება "  + c;
//         if(c  < 10){
//            c++;  
//         }
       
//     })
   
// })

// querAll.forEach(el=>{
//     el.innerHTML = "html მნიშვნელობა"
// })

// for (const key of bytag) {
//     key.innerHTML =  "ჩანაცვლებული მნიშვნელობა"
// }

// for (let i = 0; i < byclass.length; i++) {
//     const element = byclass[i];
//     element.innerHTML =  "ჩანაცვლებული მნიშვნელობა"
// }

//byclass[1].innerHTML = "ჩანაცვლებული მნიშვნელობა"


let plus = document.querySelector('.incr');
let minus = document.querySelector('.decr');
let inntext = document.querySelector('.out');
let calcs = document.querySelector('.calcs');
let s = 1;
plus.addEventListener('click', function(){
    inntext.innerText = ++s;

    //  calcs.classList.add('new-class', 'sm') // კლასის დამატება
   //  calcs.classList.remove('bg-danger') // კლასის წაშლა
  //  calcs.classList.toggle('new-class') // კლასის წაშლა/მინიჭება
 // calcs.classList.replace('bg-danger', 'bg-succes') // // კლასის ჩანაცვლება

  console.log(calcs.classList.contains('bg-dangers'))

})


minus.addEventListener('click', function(){
    if(s > 1){
         inntext.innerText = --s
    }
   
})

let btn = document.querySelector('.sidebtn');
let bar = document.querySelector('.sidebar');

btn.addEventListener('click', function(){
    bar.classList.toggle('show')
    btn.classList.toggle('show')
})
 

let mybtns = document.querySelector('.attrbtn');
let inputs = document.querySelector('.attr input');

mybtns.disabled=true;

inputs.oninput = function(){
    if(this.value.length > 0){
        mybtns.disabled=false;
    }else{
        mybtns.disabled=true;
    }
}

let User = {
    email:"admin@gmail.com",
    pass:"123123",
}

let cou = 0;

mybtns.onclick = function(e){
    e.preventDefault();
    css(msg, {
        display:"none"
    })
    let email = document.querySelector('[name="user"]');
    let pass = document.querySelector('[name="pass"]')
   
    if(email !== User.email && pass !== User.pass){
        if (cou >= 3) {
            this.disabled = true;
            msg.innerText = "თქვენ დაგებლოკათ ანგარიშ!";

            setTimeout( function(){
                mybtns.disabled = false;
                msg.innerText = "თქვენ ანგარიში განიბლოკა";
                cou = 0;
            }, 4000)

        }
       css(msg, {
           display:"block"
       })
        cou++;
    }else{
        window.location.reload();
    }

      //     inputs.getAttribute('type') აბრუნებს ატრიბუტის მნიშვნელობას 
     //      inputs.type აბრუნებს ატრიბუტის მნიშვნელობას (შემოკლება)
    //       inputs.setAttribute('disabled', true) ატრიბუტის მინიჭება
   //        inputs.disabled = true; ტრიბუტის მინიჭება  (შემოკლება)
  //         inputs.type =  inputs.type ==  "text" ?   'password' : 'text'    ტრიბუტის განახლება 
 //          inputs.toggleAttribute('disabled') ატრიბუტის toggle
 // inputs.removeAttribute('disabled') // ატრიბუტის წაშლა
 
    // inputs.style.backgroundColor =;
    // inputs.style.color = "#fff"
    // inputs.style.borderRadius = "20px"

    // css(inputs, {
    //     backgroundColor: "red",
    //     color: "#fff",
    //     borderRadius: "20px",
    //     padding:"20px",
    //     border:"0"
    // })
}

 

function css(selector, styleobj){
    for (const key in styleobj) {
      const prop = key;
      const val =  styleobj[key];
      selector.style[prop] = val;
    }
}

 