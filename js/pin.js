$("#canvas").click(function(e){
	// Get X and Y Coordinates of the mouse
	 var x = e.pageX;
    var y = e.pageY;

	// Append pin to canvas
	$(this).append($('<div/>').addClass('pin').css({
        left: x,
        top: y
    }));

	// Log the X and Y coordinates
	console.log(posX + ", " + posY);
});