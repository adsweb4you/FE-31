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
        }, 400)
    })

     

});

 

})

 