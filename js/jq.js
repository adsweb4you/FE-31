$(function(){


 $('.hide').click(function (e) { 
     e.preventDefault();
    //  $('.box').hide(2000, function(){
    //     $('.box').show(5000)
    //  });

  //  $('.box').fadeOut();
    $('.box').slideUp();
 });
 
 $('.show').click(function (e) { 
    e.preventDefault();
    // $('.box').show(2000, function(){
         
    // });
  //  $('.box').fadeIn();
  $('.box').slideDown();
    
});

 
$('.toglle').click(function (e) { 
    e.preventDefault();
    // $('.box').toggle(2000, function(){
         
    // });
   // $('.box').fadeToggle();
   $('.box').slideToggle();
 
});


$('.css').click(function (e) { 
    e.preventDefault();
    $('.box').animate({
        'margin-top':'60px',
        'border-radius':'50px',
 
    }, 4000, function(){
        $('.box').animate({
            'margin-left':'1000px',
        }, 400, function(){
          console.log($('.box').css('margin-top'))  
        })
    })

     

});



 
$(".text").click(function (e) { 
    e.preventDefault();
    $(".text  i").css('display', 'none');

    $(this).css({
        'backgroundColor':'#fff',
        'transition':'all 1.2s ease-in',
        
    }).animate({
        'width':"400px",
        'height':"220px",
        'border-radius':"8px",
 
    }, 1000, function(){
        $('.innertext').animate({
           // "opacity":1,
            "width":"100%",
        },1300,  function(){
            $('.innertext').animate({
                 "opacity":1,
            }, 1200)
        })
    })

});


$(document).click(function (e) { 
    //e.preventDefault();

 if (e.target.localName == "body" || e.target.localName == "html") {
     


    $('.innertext').animate({
        
        "opacity":0,
    }, 1200, function(){
        $('.innertext').hide();
        $('.text').animate({
             "width":"50px",
             'height':"50px",
             'border-radius':"50%",
        }, 500, function(){
            $(".text  i").css('display', 'block');
            $('.text').css({
                'backgroundColor':'crimson',
                'transition':'all 1.2s ease-in',
            });
           
        })
    })

 }
    
});



let mytext = $('.mycontent').text(); // get
let myhtml = $('.mycontent').html(); // get


//$('.mycontent').text(` კონტენტი  `);  //set
// $('.mycontent').html(`<span> კონტენტი </span>`) // set

$('.form-con').on("input", function(e){
  let vals =     $(this).val(); //get
  //$('.form-condis').val(vals) //set
  $('.form-condis').attr('type') // get
  $('.form-condis').attr(
      { 
          'type': 'password',
       //   'disabled': 'disabled'
    
      }) // set
//   $('.form-condis').removeAttr('disabled');

$('.form-condis').prop('disabled', true)

// if (vals.length > 1) {
//     $('.chech').attr('checked', 'checked')
// }else{
//     $('.chech').attr('checked', 'checked')
// }


 

})

let s = 0;

 $(".checks").click(function (e) { 
     e.preventDefault();
     $('body').toggleClass('bg-dark')

    //  console.log( $('body').hasClass('bg-dark'))

    //  if($('.chech').prop('checked')){
    //      $('body').addClass('bg-dark')
    //  }else{
    //     $('body').removeClass('bg-dark')
    //  }
     
$('#mybox').append(`<input type="checkbox" name="ss"  class="chech"> ${s}`)

  $('.chech').click(function (e) { 
    e.preventDefault();
    $(this).remove();
});

if(s > 10){
    $('#mybox').empty();
    s= 0;
}

//$('#mybox').prepend(`<input type="checkbox" name="ss"  class="chech"> `)
s++;
 });


 $(".checkdem").click(function (e) { 
     e.preventDefault();
      let wid =  $('#mybox').width(); //ელემენტის კონტენტის ზომა
      console.log(wid);
    $('#mybox').css({
        "width": `${wid + 50}px`,
    }, 200)
    // let inwid =  $('#mybox').innerWidth(); //ელემენტის კონტენტის ზომა - ბორდერის ზომა
    // let outwid =  $('#mybox').outerWidth(); //ელემენტის კონტენტის სრული ზომა
    // console.log(outwid);

 });

 let city = [
     {
        countryid:1,
        countr:"საქართველო",
        incity:["თბილისი", "რუსთავი"]
     },
     {
        countryid:2,
        countr:"აშშ",
        incity:["ვაშინგტონი", "მაიამი"]
     },
     {
        countryid:3,
        countr:"გერმანია",
        incity:["ბერლინი", "შტუდგარდი"]
     },
     {
        countryid:4,
        countr:"საფრანგეთი",
        incity:["პარიზი", "ბორდო"]
     },

     {
        countryid:5,
        countr:"თურქეთი",
        incity:["სტამბოლი", "ანკარა"]
     }

 ]


 city.forEach(coutr => {
    $("#country").append(`<option value="${coutr.countryid}"> ${coutr.countr} </option>`)
 });

 $("#country").change(function (e) { 
     e.preventDefault();
     
     let vals = $(this).val();

   let citys =   city.find(el=>{
         return el.countryid == vals;
     })

     
 

 $("#city").empty();
 
 citys.incity.forEach(cit => {
    $("#city").append(`<option> ${cit} </option>`)
 });

 });


 $('.imgoutput').slideUp();

$(".d-flex img").click(function (e) { 
    e.preventDefault();
    $('.imgoutput').slideDown().css('opacity',1);
    let src = $(this).attr('src')
    $('.imgoutput img').attr('src',src)
});

$('.imgoutput span').click(function (e) { 
    e.preventDefault();
    $('.imgoutput').slideUp()
});

    // $('.child').parent() აბრუნებს მშობელს
    // $('.child').parents() აბრუნებს მშობლებს
    // $('.child').parentsUntil("body") აბრუნებს მშობლებს განსაზღვრულ დონემდე
    // $('.parents').children() აბრუნებს ყველა შვილობილ ელემენტს
    //$('.parents').children(".child") აბრუნებს სპეციფიურ შვილობილ ელემენტს 
    // $('.child').next().css('color',  'red') აბრუნებს ელემენტის ქვედა მეზობელს
    // $('.child').prev().css('color',  'green') აბრუნებს ელემენტის ზედა მეზობელს
    // $('.child').siblings().css('color',  'red') აბრუნებს ელემენტის მეზობლებს
    // $('.child').nextAll().css('color',  'red');  ყველა ქვედა მეზობელი
    // $('.child').prevAll().css('color',  'green');  ყველა ზედა მეზობელი
    //$('.parents p').eq(5) აბრუნებს ელემენტს ინდექსის მიხედვით
    //$('.parents p').not('.child')  ნოთ სელექტორი
    // $('.parents p').first().css('color',  'green'); აბრუნებს  პირველ ელემენტს
    // $('.parents p').last().css('color',  'red'); აბრუნებს  ბოლო ელემენტს
    // $('.parents').find('span').css('color',  'green');  ეძებს ელემენტს


    $.each($('.parents p'), function(index, element){
        console.log($(element))
    })

// endstart
})

 