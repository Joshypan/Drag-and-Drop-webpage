var diffX, diffY, theElement;

function grabber(event) {
    theElement = event.currentTarget;
    var posX = parseInt(theElement.style.left) || 0;
    var posY = parseInt(theElement.style.top) || 0;
    diffX = event.clientX - posX;
    diffY = event.clientY - posY;
    document.addEventListener("mousemove", mover, true);
    document.addEventListener("mouseup", dropper, true);
    event.stopPropagation();
    event.preventDefault();
}

function mover(event) {
    theElement.style.left = (event.clientX - diffX) + "px";
    theElement.style.top = (event.clientY - diffY) + "px";
    event.stopPropagation();
}

function dropper(event) {
    document.removeEventListener("mouseup", dropper, true);
    document.removeEventListener("mousemove", mover, true);
    event.stopPropagation();
}

const draggableElements = document.querySelectorAll(".draggable");
draggableElements.forEach(element => {
    element.addEventListener("mousedown", grabber);
});