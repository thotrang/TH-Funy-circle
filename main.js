
function randomColor(){
    let red= Math.floor(Math.random() * 255);
    let blue= Math.floor(Math.random() * 255);
    let green= Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle() {
    let c = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let x = Math.random() * window.innerWidth;
    let y = Math.random() *  window.innerHeight;
    let circle = new Circle(x, y, radius);
    let color=randomColor();
    c.beginPath();
    c.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    c.fill();
    c.fillStyle = color;
    
}

 function manyCircle(){
         for(var i = 0; i < 60; i++){
         createCircle();
     }
 }
 
manyCircle();