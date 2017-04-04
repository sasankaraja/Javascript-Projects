$(document).ready(function(){
   
   // alert('doc is loaded');
    
    // set options/variables
    var speed = 500;         //fade speed
    var autoswitch = true;   // auto slider options
    var autoswitch_speed = 3000;
    
    //Add initial active class
    
    $('.slide').first().addClass('active');
    
    //Hide all slides
    
    $('.slide').hide();
    
    //Show first slide
    
    $('.active').show();
    
    //button operation
    
    // nice function
    $('#next').on('click', nextslide);
       
    
    $('#prev').on('click', prevslide);
       
    
    
    if(autoswitch === true){
        setInterval(nextslide,autoswitch_speed);
    }
    
    //move next
    function nextslide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
            
        }
        else {
            $('.oldActive').next().addClass('active');
        }
        
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    
    //move previous
    function prevslide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
            
        }
        else {
            $('.oldActive').prev().addClass('active');
        }
        
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    

    
});