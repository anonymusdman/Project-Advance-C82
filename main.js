var linewidth = "4";
var color = "red";
var radius = 40;
var mouseEvent="empty";
var x;
var y;
var mousedown = false;
var canvas = document.getElementById("canvasCircle");
var ctx = document.getElementById("canvasCircle").getContext("2d");
canvas.addEventListener("mousedown", Mousedown_event);
function Mousedown_event(e) {
    linewidth = document.getElementById("lineWidth").value;
    color = document.getElementById("colorCircle").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
    mousedown = true;
    console.log(mouseEvent);
    console.log(mousedown);
}
canvas.addEventListener("mouseup", Mouseup_event);
function Mouseup_event(e) {
    mouseEvent = "mouseup";
    mousedown = false;
    console.log(mouseEvent);
    console.log(mousedown);
}
canvas.addEventListener("mouseleave", Mouseleave_event);
function Mouseleave_event(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", Mousemove_event);
function Mousemove_event(e) {
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    mouseEvent = "mousemove";
    console.log(mouseEvent);
    if (mousedown == true) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseenter", Mousenter_event);
function Mousenter_event() {
    mouseEvent = "mouseenter";
    console.log(mouseEvent);
}
function clear_the_canvas() {
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}