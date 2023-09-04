/* Iteration 4: Make the Canvas App Functional */

var background = document.getElementById('background');

var inputBackground = document.getElementById("input-background");

inputBackground.oninput = () =>{
    var colorBack = inputBackground.value

    background.style.fill = colorBack
}

var face = document.getElementById('face-plate');

var inputFace = document.getElementById("input-face");

inputFace.oninput = () =>{
    var colorFace = inputFace.value

    face.style.fill = colorFace
}

var helmet = document.getElementById('helmet');

var inputHelmet = document.getElementById("input-helmet");

inputHelmet.oninput = () =>{
    var colorHelmet = inputHelmet.value

    helmet.style.fill = colorHelmet
}

var eyes = document.getElementById('eyes');

var inputEyes = document.getElementById("input-eyes");

inputEyes.oninput = () =>{
    var colorEyes = inputEyes.value

    eyes.style.fill = colorEyes
}