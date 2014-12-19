// JavaScript Document

$(document).ready(function() {
var undo_element = $('path[class="colorable"]')[0];
var undo_to_color = "white";
    
   add_coloring_book_events();
   
   // sidebar 
   $("#sidebarTab").click(function(){  
        $(".sidebar_container").toggleClass("lefter"); 
        $(".opencloseicon_container").toggleClass("rotater");
    }); 
    $("#option_more").click(function(){  
        $(".sidebar_container").toggleClass("lefter"); 
        $(".opencloseicon_container").toggleClass("rotater");
    });
});

//click to color thing and stuff
function add_coloring_book_events() {
    
	$( document ).on( "click", 'path[class="colorable"]', function() {
        //$('path[class="colorable"]').on("click", function(event) {
	// Suppress default; helpful on touchscreen devices
	//event.preventDefault();
	// Get the current element and color and save it in undo_element and undo_to_color variables
	undo_element = this;
	undo_to_color = $(this).attr("fill");
	// Toggle the "Undo" button to make sure it says "Undo" (it might say "Redo")
	$('#undo_redo').attr("value", "Undo");
	// Set the fill of clicked portion of drawing to the color chosen in palette below
	color_chosen = $("#color_chosen").html();
        $(this).attr("fill", color_chosen); 
    });

    // Add click events for color palette
    $('.color_choice').on("click", function(event) {
       // Get button id, which is the color name 
       color_chosen = $(this).attr("id");
       // Set color_chosen text to the name of color clicked
       $("#color_chosen").html(color_chosen);  

       //creating cursor
       makeCursor(color_chosen);
    });

    // Add click events for reset button, which reverts the fill of the entire drawing to white
    $('#option_delete').on("click", function(event) {
	// Get all the colorable elements and set fill back to white
	$('path[class="colorable"]').attr("fill", "white");
	// Resetting the drawing clears all undo information
	$('#undo_redo').attr("value", "Undo");
	undo_element = $('path[class="colorable"]')[0];
	undo_to_color = "white";
    });

    $('#undo_redo').on("click", function(event) {
	// First, save the existing color of the element we're going to undo
	existing_color = $(undo_element).attr("fill");
	// Now revert the color back to the undo_to_color
	$(undo_element).attr("fill", undo_to_color);
	// Finally, make existing_color the new undo_to_color, to support "Redo" functionality
	undo_to_color = existing_color;
	// If the button is named "Undo", rename it "Redo" and vice versa
	if ($(this).attr("value") == "Undo") {
	    $(this).attr("value", "Redo");
	} else {
	    $(this).attr("value", "Undo");
	}
    });
    
    $('#tool_eraser').on("click", function(event) {
       // Get button id, which is the color name 
       color_chosen = "#FFFFFF";
       // Set color_chosen text to the name of color clicked
       $("#color_chosen").html(color_chosen);  

       //creating cursor
       makeErasor(color_chosen);
    });
    
    $('#tool_paint').on("click", function(event) {
       // Get button id, which is the color name 
       color_chosen = "#E9292F";
       // Set color_chosen text to the name of color clicked
       $("#color_chosen").html(color_chosen);  

       //creating cursor
       makeCursor(color_chosen);
    });
}

// Making colored cursor
function makeCursor(color_chosen) {
    
    var cursor = document.createElement('canvas'),
        context = cursor.getContext('2d');

    cursor.width =  40;
    cursor.height = 40;
    
    //cursor - tip
    context.beginPath();
      context.moveTo(2, 5);
      context.lineTo(5, 2);
      context.lineTo(10, 2);
      context.lineTo(16, 8);
      context.lineTo(8, 16);
      context.lineTo(2, 10);
      context.lineTo(2, 5);

      // complete custom shape
      context.closePath();
      context.strokeStyle = "black";
      context.fillStyle = color_chosen;
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.fill();
    context.stroke();

    //cursor - body-white stripe
    context.beginPath();
      context.moveTo(16, 8);
      context.lineTo(19, 11);
      context.lineTo(11, 19);
      context.lineTo(8, 16);


      // complete custom shape
      context.closePath();
      context.strokeStyle = "black";
      context.fillStyle = "lightgrey";	
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.fill();
    context.stroke();

    //cursor - body-black stripe
    context.beginPath();
      context.moveTo(19, 11);
      context.lineTo(21, 13);
      context.lineTo(13, 21);
      context.lineTo(11, 19);


      // complete custom shape
      context.closePath();
      context.strokeStyle = "black";
      context.fillStyle = "black";	
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.fill();
    context.stroke();

    //cursor - the body
    context.beginPath();
      context.moveTo(21, 13);
      context.lineTo(34, 27);
      context.lineTo(27, 35);
      context.lineTo(13, 21);


      // complete custom shape
      context.closePath();
      context.strokeStyle = "black";
      context.fillStyle = "lightgrey";	
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.fill();
    context.stroke();

    //cursor - the end
    context.beginPath();
      context.moveTo(34, 27);
      context.lineTo(37, 30);
      context.lineTo(30, 38);
      context.lineTo(27, 35);
      context.lineTo(34, 27);

      // complete custom shape
      context.closePath();
      context.strokeStyle = "black";
      context.fillStyle = color_chosen;	
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.fill();
    context.stroke();
 
    document.body.style.cursor = 'url(' + cursor.toDataURL() + '), auto';
}

function makeErasor(color_chosen) {
    
    var cursor = document.createElement('canvas'),
        context = cursor.getContext('2d');

    cursor.width =  40;
    cursor.height = 40;
    
    //cursor - tip
    context.beginPath();
      context.moveTo(15, 3);
     context.lineTo(23, 11);
     context.lineTo(11,23);
    context.lineTo(3,15);
      context.lineTo(15, 3);

      // complete custom shape
      context.closePath();
      context.strokeStyle = "black";
      context.fillStyle = color_chosen;	
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.fill();
    context.stroke();
    
     //cursor - tip
    context.beginPath();
      context.moveTo(23, 11);
    context.lineTo(40, 28);
    context.lineTo(28, 40);
    context.lineTo(11,23);
      context.lineTo(23, 11);

      // complete custom shape
      context.closePath();
      context.strokeStyle = "black";
      context.fillStyle = "#444444";	
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.fill();
    context.stroke();


 
    document.body.style.cursor = 'url(' + cursor.toDataURL() + '), auto';
} 