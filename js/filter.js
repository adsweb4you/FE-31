$('.slid img').click(function (e) { 
    e.preventDefault();
    
    $('.slid').find('.active').removeClass('active')
    $(this).addClass('active')
    $('.poster img').attr('src', $(this).attr('src'))
    $('.poster img').attr('data-index', $(this).data('index'))
});


$(".poster").click(function (e) { 
    e.preventDefault();
    $(".prevmodal").css('display', 'block')
    $("body").addClass('modaled')
  
   let src = $(".poster img").attr('src')
   let index = $(".poster img").attr('data-index')
   $('.parimg img').attr('src',src)
   $('img[data-index="'+index+'"]').addClass('active')
});

$(document).click(function (e) { 
    e.preventDefault();
 if (e.target.classList[0] == "modaled") {
    $(".prevmodal").css('display', 'none')
    $("body").removeClass('modaled')   
    $('.manyimg img.active').removeClass('active')
 }

});

// prev

$(".prevmodal .prev").click(function (e) { 
    e.preventDefault();
    if ($('.manyimg img.active').prev().length > 0) {
        $('.manyimg img.active').removeClass('active').prev().addClass('active')
        let src = $('.manyimg img.active').attr('src')
         $('.parimg img').attr('src', src)
    }
});

// next

$(".prevmodal .next").click(function (e) { 
    e.preventDefault();
    if ($('.manyimg img.active').next().length > 0) {
        $('.manyimg img.active').removeClass('active').next().addClass('active')
        let src = $('.manyimg img.active').attr('src')
         $('.parimg img').attr('src', src)
    }
});

$('.manyimg img').click(function (e) { 
    e.preventDefault();
    $('.manyimg').find('.active').removeClass('active')
    $(this).addClass('active')
    $('.parimg img').attr('src', $(this).attr('src'))
    
});


$('.fill button').click(function (e) { 
    e.preventDefault();
    let clas = $(this).data('class');
    if (clas == '.all') {
        $('.contents').fadeIn().delay(500).addClass('active')   
    }else{
    $('.contents.active').fadeOut("fast").delay(500).removeClass('active')
    $(clas).addClass('active').fadeIn("fast")
    }
   
 
});

 $.each($('.contents'), function(i, element){
   if ($(element).hasClass('active')) {
       $(this).css('background-color', 'red')
   }
 })

let co = 1;
 $(document).on("click", ".addcart", function (e) { 
     e.preventDefault();
     let update = `
     <div class="btn-group" role="group" aria-label="Basic example">
     <button type="button" data-type="1" class="btn upd btn-primary">-</button>
     <button type="button" class="btn outos">1</button>
     <button type="button" data-type="2" class="btn upd btn-success">+</button>
   </div>`
     $(this).replaceWith(update)

$(".upd").click(function (e) { 
    e.preventDefault();
    if($(this).data('type') == 2){
       co++;
       $('.outos').text(co) ;
    }else{
        co--;

        if (co < 1) {
            $('.btn-group').replaceWith('<button class="btn btn-primary addcart"><i class="bi bi-cart-check-fill"></i> </button>')
        }

        $('.outos').text(co);
    }
});
     
 });

 $( "#draggable" ).draggable({
    stop: function( event, ui ) {
        console.log(event, ui)
    }
 });

 $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });


//   let timer ;



//   $(document).on('mousemove', function(){

//   clearTimeout(timer);

//     timer = setTimeout(function(){
//         alert('დრო გავიდა')
//        }, 2000)

//   })

  let s = 1;
  let int = setInterval(function(){
    console.log(s)
    s++;
  }, 1000)

setTimeout(function(){
 clearInterval(int);
}, 5000)