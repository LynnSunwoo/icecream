// SCROLL LEFT AND RIGHT FOR THE COLOR PALETTE

// set left position as variable = leftval
var leftval = $('#colors ul').left;
leftval = 0;

// if right arrow is clicked, move 300px to right, and add 300 value to left val
$("#scroll_right").click(function () {
    
    if(leftval >= 0 && leftval < 1800) {
        $("#colors ul").animate( {left: "-=300px"},"slow"); 
        leftval += 300; 
        //alert(leftval);
    //when leftval reaches 2700, stop moving the color pallette, its the end.
    }else if(leftval > 1801) {
        leftval += 0;  
        //alert(leftval);
    }
});

// vise versa for left arrow,
$("#scroll_left").click(function () {

    if(leftval > 0 && leftval < 3601) {
        $("#colors ul").animate( {left: "+=300px"},"slow"); 
        leftval -= 300;
        //alert(leftval);
    // stopping it at leftval=0, because it is the beggining.
    }else {
        leftval -= 0;  
        //alert(leftval);
    }   
});




// SCROLL UP AND DOWN FOR THE SIDE BAR

//variable
var topval = $('#thumb_container ul').top;
topval = 0;

//if click the up arrow, scroll up.
$("#scroll_down").click(function () {
    
    if(topval >= 0 && topval < 1200) {
        $("#thumb_container ul").animate( {top: "-=180px"},"slow"); 
        topval += 300; 
        //alert(leftval);
    //when leftval reaches 2700, stop moving the color pallette, its the end.
    }else if(topval > 1201) {
        topval += 0;  
        //alert(leftval);
    }
});
$("#scroll_up").click(function () {

    if(topval > 0 && topval < 1201) {
        $("#thumb_container ul").animate( {top: "+=180px"},"slow"); 
        topval -= 300;
        //alert(leftval);
    // stopping it at leftval=0, because it is the beggining.
    }else {
        topval -= 0;  
        //alert(leftval);
    }   
});
