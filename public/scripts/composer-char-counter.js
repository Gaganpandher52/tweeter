$(document).ready(function() {
    // --- our code goes here ---
    
    let count = 0 ;
    
    $("textarea").keydown(function() {
        count = $('textarea').val().length;
        if(count > 140){
            $('.counter').text(140 - count).css({color:'red'});
        }
        else{
            $('.counter').text(140 - count).css({color:'black'});
        }
        
      });
      
      
   

  });