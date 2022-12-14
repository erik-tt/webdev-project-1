
//This is the JS file for proect 1 in IT2810. 
//The code for the HTML canvas drawing and the JQuery code is located here.


//Increments the X coordinate of the arrow to create an animation
var deltaArrow = 0;

//The coordinates to add to the animation for the movement of the ball
var deltaBallX = 0;
var deltaBallY = 0;
//Pause the ball for a little while when it reaches the goal.
var pause = 0;


function drawCanvas() {

    
    //Clears the canvas
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //Clears the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //JQuery to detect if someone is hovering over canvas
    //Boolean
    var isHoveringCanvas = $("#canvas").is(":hover");
    
    //Drwas the sky, the color light blue is given after the coloring of the ball to prevent the
    //sky from being colored differently
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.rect(0, 0, 400, 250);
    context.fill();
  
    
    //Track mouse movement
    /*Mouse movement inspired by: 
    Stack Overflow, 2016, 
    https://stackoverflow.com/questions/29300280/update-html5-canvas-rectangle-on-hover*/
    canvas.onmousemove = function(e) {
        //OffsetTop is the distance from the top of the page to the top of the canvas
        var y = e.pageY - this.offsetTop;

        //250 is the coordinate of the bottom of the sky. When it is smaller than this it is inside the sky.
        if (y < 250) {
            context.fillStyle = "blue";
            context.fillRect(0, 0, 400, 250);
        }

    } 

    //Grass
    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(0,250,400,150);
    context.closePath();

    //Goal
    context.beginPath();
    context.moveTo(200,150);
    context.lineTo(200,250);
    context.moveTo(350,250);
    context.lineTo(350,150);
    context.lineTo(200,150);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    context.closePath();

    //Person - Body
    context.beginPath();
    context.moveTo(270,250);
    context.lineTo(275,225);
    context.moveTo(280,250);
    context.lineTo(275,225);
    context.moveTo(275,225);
    context.lineTo(275,190);
    context.moveTo(265,225);
    context.lineTo(275,195);
    context.moveTo(285,225);
    context.lineTo(275,195);

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();  
    context.closePath();

    //Person - Head
    context.beginPath();
    context.arc(275,180,10,0,2*Math.PI);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    context.closePath();


    if (isHoveringCanvas) {
        //Ball
        context.beginPath();
        context.fillStyle = "red";
        context.arc(200 + deltaBallX,350 - deltaBallY,20,0,2*Math.PI);
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.stroke();
        context.fill();
        context.closePath();
        //To prevent the sky from being red when the anination is running
        context.fillStyle = "lightblue";
        //Incrementing the values that move the ball towards the goal.
        moveBall();
        
    
    } else {
        //Ball
        context.beginPath();
        context.fillStyle = "white";
        context.arc(200,350,20,0,2*Math.PI);
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.stroke();
        context.fill();
        context.closePath();
        //from preventing the sky from being white when the animation is running
        context.fillStyle = "lightblue";
    }

    //Arrow
    context.beginPath();
    context.moveTo(100 + deltaArrow,165);
    context.lineTo(150 + deltaArrow,165);
    context.moveTo(150 + deltaArrow,165);
    context.lineTo(130 + deltaArrow,150);
    context.moveTo(150 + deltaArrow,165);
    context.lineTo(130 + deltaArrow,180);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    context.closePath();
    
    //Increment the value that is being added to the x arrow coordinate
    deltaArrow = incrementDeltaArrow(deltaArrow);

    window.requestAnimationFrame(drawCanvas);
}

//Increments the x variable by 0.5, until it reaches 30.
function incrementDeltaArrow(x) {
    if (x < 30) {
        x += 0.5;
    } else {
        x = 0;
    }
    return x;
}

//Make the ball move. This function could probably be more optimal
//but it works for now
//It uses the pause variable to make the ball pause, but this uses resources
//On the other
function moveBall() {
    if (deltaBallY < 181 && pause == 0) {
        deltaBallY += 4;
    }
    if (deltaBallX < 21 && pause == 0) {
        deltaBallX += 0.5;
    }
    if (deltaBallY >= 180 && deltaBallX >= 20) {
        deltaBallY = 0;
        deltaBallX = 0;
    }
    if (deltaBallY == 0 && deltaBallX == 0) {
        pause += 1;
    }
    /*This pauses the ball to prevent the animation from starting much faster than 
    the CSS animation*/
    if (pause == 20) {
        pause = 0;
    }
}



//From JQuery API
//Hide the documentation when loading the page
$(document).ready(function(){
    $(".text_docs").hide();
});


//Toggeling the documentation text when pressing the button
$(document).ready(function(){
    $("button").click(function(){
        $(".text_docs").toggle(300);
    });
});

//Run the drawCanvas function at the top of the page.
drawCanvas();