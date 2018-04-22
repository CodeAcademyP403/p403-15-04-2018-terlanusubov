var color = document.querySelector("#changeColor");
var bgColor = document.querySelector("#bgColor");
var addPhoto = document.querySelector("#addPhoto");
var bgPhoto = document.querySelector("#bgPhoto");
var radius = document.querySelector("#radius");
var speed = document.querySelector("#speed");
var spidometr = document.querySelector("#spidometr");

var bounceDiv = document.querySelector("#bounceDiv");
var circle = document.querySelector("#circle");

spidometr.innerHTML = speed.value;

// CHANGE TO COLOR OF CIRCLE
color.addEventListener("change", function(){
     circle.style.backgroundColor = color.value;
})


//  CHANGE TO BACKGROUND COLOR
bgColor.addEventListener("change",function(){
    bounceDiv.style.backgroundColor = bgColor.value;
})

// Background Photo

addPhoto.addEventListener("change", function(){
    circle.style.backgroundImage = "url('"+addPhoto.value+"')";
})

// ADD PHOO TO BACKGROUND

bgPhoto.addEventListener("change", function(){
    bounceDiv.style.backgroundImage = "url('"+bgPhoto.value+"')";
})

// CHANGE RADIUS OF CIRCLE

radius.addEventListener("change",function(){
    circle.style.width = radius.value + "px";
    circle.style.height = radius.value + "px";
})

//  CHNAGE SPEED

speed.addEventListener("change" , function(){
    circle.style.animationDuration = speed.value + "s";
    spidometr.innerHTML = speed.value;
})







