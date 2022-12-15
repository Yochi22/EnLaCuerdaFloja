const body  = document.querySelector("body")
body.onload = function() {myFunction()};

function myFunction() {
    const funebre = new Audio('/sounds/marcha.mp3');
    funebre.play();
}
