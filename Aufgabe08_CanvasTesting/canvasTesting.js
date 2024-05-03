"use strict";
var canvasTesting;
(function (canvasTesting) {
    let canvasField = document.querySelector("canvas");
    let crc2 = canvasField.getContext("2d");
    // variables needed for the randomColor function
    let f1;
    let f2;
    let f3;
    let color;
    // drawing of lines in the background in a random color
    for (let i = 0; i < 1450; i = i + 2) {
        randomColor();
        crc2.strokeStyle = "" + color;
        crc2.beginPath();
        crc2.moveTo(0, -700 + i);
        crc2.lineTo(1081, 0 + i);
        crc2.stroke();
    }
    // gives out a random color
    function randomColor() {
        f1 = Math.random() * 255;
        f2 = Math.random() * 255;
        f3 = Math.random() * 255;
        color = "rgb(" + f1 + "," + f2 + "," + f3 + ")";
        return color;
    }
    // variable needed for generating a random number
    let genNumber = 0;
    // Variables needer for creating pentagons in a random location
    let genX = 0;
    let genY = 0;
    // variable needed for creating pentagons in a random size
    let scaleFive = 1;
    // creating pentagons with a random size and a random color in a random location
    for (let i = 0; i < 400; i++) {
        let fivePoint = new Path2D();
        randomColor();
        crc2.strokeStyle = "" + color;
        genX = randomNumber(1080);
        genY = (randomNumber(730)) - 50;
        scaleFive = (randomNumber(10)) + 1;
        crc2.beginPath;
        fivePoint.moveTo(genX, genY);
        fivePoint.lineTo(genX + 8.09 * scaleFive, genY + 5.88 * scaleFive);
        fivePoint.lineTo(genX + 5 * scaleFive, genY + 15.39 * scaleFive);
        fivePoint.lineTo(genX - 5 * scaleFive, genY + 15.39 * scaleFive);
        fivePoint.lineTo(genX - 8.09 * scaleFive, genY + 5.88 * scaleFive);
        fivePoint.lineTo(genX, genY);
        crc2.stroke(fivePoint);
        crc2.fillStyle = "" + color;
        crc2.fill(fivePoint);
    }
    // generating a random number between 0 and the given number
    function randomNumber(a) {
        genNumber = Math.random() * a;
        return genNumber;
    }
})(canvasTesting || (canvasTesting = {}));
//# sourceMappingURL=canvasTesting.js.map