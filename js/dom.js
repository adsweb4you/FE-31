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
 