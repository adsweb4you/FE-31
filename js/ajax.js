$(function () {
    

    $("#ajax").click(function (e) { 
        e.preventDefault();
        
        $(this).prepend('<span class="spinner-border spinner-border-sm removed" role="status" aria-hidden="true"></span>').prop('disabled', true)

        let data  = {price_from:100, price_to:500};
        data = JSON.stringify(data);
        $('.row').empty();
        $.ajax({
            type: "GET",
            url: "data.json",
            data: data,
            dataType: "text",
            success: function (response) {
                response  = JSON.parse(response);
              console.log(response)
            //     setTimeout(function(){

               

            //     response.forEach(element => {
            //         let card = `<div class="col-lg-3 mb-3"> 
            //            <div class="card">
            //         <div class="card-header">
            //          ${element.userId}
            //         </div>
            //         <div class="card-body">
            //           <blockquote class="blockquote mb-0">
            //             <p> ${element.title}</p>
            //             <footer class="blockquote-footer"> ${element.id}</footer>
            //           </blockquote>
            //         </div>
            //        </div>
            //       </div>`
      
            // $('.removed').remove();
            // $("#ajax").prop('disabled', false)
            // $('.row').append(card)
            //     });
            // }, 3000)
            },
            error:function(response){
               
                $('.row').html(`<h1>${response.status} </h1>`).addClass('text-danger')
            }
         
        });

    });

    $(document).on('click', '.card', function(){
          $(this).css('border', '2px solid red')
    })



    $(document).on('click', '.nav-link', function(e){
        e.preventDefault();
        $('.row').slideUp();
        let page = $(this).attr('href');
        $('.row').slideDown().load(page)

    })


    $('#fecth').click(function (e) { 
        e.preventDefault();

    async  function test(){
  
      let sm =   fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
            return json;
        })
     

   return sm;
  
        }

         test().then(el=>{
           let smarray = [];
        for (let s = 0; s < el.length; s++) {
            const element = el[s];
             smarray.push(element)
        }
        return smarray;
        }).then(response=>{
            console.log(response)
        })

        //console.log(sm())
        
        // fetch('datas.json', {
        //     method:"get"
        // })
        // .then(resp => resp)
        // .then(data=> {
        //     console.log(data.status)
        // })

    });

    let dayt  = {ts:'asda'};

    dayt = JSON.stringify(dayt);

    localStorage.setItem('mode', dayt);
    let mode = localStorage.getItem('mode');
   // localStorage.removeItem('mode')
   // localStorage.clear();

   // sessionStorage.setItem('token', 'asdasdasds')
   mode = JSON.parse(mode)

   console.log(mode);

   if (mode == "dark") {
        $('body').css('background-color', 'black')
   }

});