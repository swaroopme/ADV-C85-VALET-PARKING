Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext('2d');

greencar_width = 75;
greencar_height = 100;

bg_image = "parkingLot.jpg";
greencar_image = "car2.png";


greencar_x = 75;
greencar_y = 290;

function add() {

    bg_imgTag = new Image();
	bg_imgTag.onload = uploadBg;
	bg_imgTag.src = bg_image;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBg() {
ctx.drawImage(bg_imgTag, 0, 0, Canvas.width, Canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBg();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y <=500)
	{
		greencar_y = greencar_y + 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBg();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBg();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x <=700)
	{
		greencar_x = greencar_x + 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBg();
		uploadgreencar();
	}
}