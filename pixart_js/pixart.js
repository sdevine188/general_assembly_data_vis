$(document).ready(function(){
	
	var paint_color = "green"
	var color_change_counter = 0

	function paint_square(event) {
			// $(event.target.css("background-color", paint_color));
			$(this).css("background-color", paint_color);
	}

for(var i = 0; i < 400; i++) {
	var new_div = $("<div class='square'></div>")
	$(".paint_area").append(new_div)
}

$(".square").on("mouseover", paint_square)

function change_color(color) {
	// $("div.brush").css("background-color", color_text);
	if(color_change_counter < 2) {
		color_change_counter = color_change_counter + 1;
	} else if(color_change_counter > 1) {
		color_change_counter = 0;
	}
	$("div.brush").eq(color_change_counter).css("background-color", color);
	paint_color = color;
}

$("#set-color").on("click", function(event) {
	event.preventDefault();
	var color_text = $("#color-field").val();
	// color_change_counter = color_change_counter + 1;
	change_color(color_text);
	}
)

$(".brush").on("click", function(event) {
		event.preventDefault();
		var color_brush = $(this).css("background-color");
		change_color(color_brush);
	}
)

	
})