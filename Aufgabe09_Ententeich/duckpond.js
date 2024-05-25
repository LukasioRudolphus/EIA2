"use strict";
var duckpond;
(function (duckpond) {
    window.addEventListener("load", handleLoad);
    let ducks = [];
    let clouds = [];
    let bird1;
    let bird2;
    let bird3;
    let bird4;
    let cloud1;
    let pCloud1;
    // Funktion zu Generierung von allem Notwendigem beim Laden des Fensters
    function handleLoad(_event) {
        let canvasField = document.querySelector("canvas");
        if (!canvasField) {
            return;
        }
        duckpond.crc2 = canvasField.getContext("2d");
        // Zeichnen des Hintergrunds
        drawBackground();
        // erstellen der Enten
        bird1 = new duckpond.Duck(0, -5);
        ducks.push(bird1);
        bird1.draw();
        bird2 = new duckpond.Duck(140, 10);
        ducks.push(bird2);
        bird2.draw();
        bird3 = new duckpond.Duck(100, 90);
        ducks.push(bird3);
        bird3.draw();
        bird4 = new duckpond.Duck(-40, 80);
        ducks.push(bird4);
        bird4.draw();
        // Erstellen der Wolke
        cloud1 = new duckpond.Cloud(150, 120, 200, 40);
        pCloud1 = cloud1.draw();
        console.log(pCloud1);
        clouds.push(cloud1);
        // Funktion, die in einem regelmäßigen Intervall aufgerufen wird, um im Bild Bewegung zu simulieren
        window.setInterval(update, 20);
    }
    function update() {
        // Bild wird neu gezeichnet, zuerst Hintergrund
        drawBackground();
        // dann die Enten an der neuen Position
        for (let duck of ducks) {
            duck.move(0.5);
            duck.draw();
        }
        // und dann die Wolken an der neuen Position
        for (let cloud of clouds) {
            let cloudPos = cloud.move(0.3);
            duckpond.crc2.putImageData(pCloud1, cloudPos.x - 150, 30);
        }
    }
    // Funktion zum Zeichnen der Hügel
    function drawHills() {
        // Funktion zum Zeichnen eine Hügels
        function createHill(_x, _y) {
            let hills = new Path2D();
            duckpond.crc2.beginPath();
            hills.moveTo(_x + 0, _y + 330);
            hills.bezierCurveTo(_x + 30, _y + 320, _x + 80, _y + 270, _x + 130, _y + 260);
            hills.bezierCurveTo(_x + 145, _y + 257, _x + 165, _y + 257, _x + 180, _y + 260);
            hills.bezierCurveTo(_x + 220, _y + 267, _x + 260, _y + 320, _x + 310, _y + 330);
            duckpond.crc2.strokeStyle = "rgb( 24, 156, 63)";
            duckpond.crc2.stroke(hills);
            // Faerbung der Hügel
            let gradient = duckpond.crc2.createLinearGradient(0, _y + 257, 0, _y + 330);
            gradient.addColorStop(0, "rgb( 24, 171, 63)");
            gradient.addColorStop(0.9, "rgb( 87, 204, 78)");
            duckpond.crc2.fillStyle = gradient;
            duckpond.crc2.fill(hills);
        }
        // Positionieren der einzelnen Hügel
        createHill(880, 0);
        createHill(940, -20);
        duckpond.crc2.fillStyle = "rgb( 87, 204, 78)";
        duckpond.crc2.fillRect(900, 310, 1080, 330);
        createHill(600, -10);
        createHill(160, 10);
        createHill(120, 20);
        createHill(-120, 10);
        createHill(-20, 5);
        createHill(500, 5);
        createHill(260, 0);
        createHill(780, 0);
        duckpond.crc2.fillStyle = "rgb( 87, 204, 78)";
        duckpond.crc2.fillRect(0, 330, 1080, 720);
    }
    // Funktion zum Zeichnen des Teiches
    function drawPond() {
        let pond = new Path2D();
        duckpond.crc2.beginPath();
        pond.moveTo(400, 610);
        pond.bezierCurveTo(350, 580, 350, 520, 390, 500);
        pond.bezierCurveTo(395, 498, 400, 493, 400, 490);
        pond.bezierCurveTo(410, 450, 620, 400, 740, 500);
        pond.bezierCurveTo(910, 560, 750, 680, 580, 630);
        pond.bezierCurveTo(560, 645, 420, 640, 400, 610);
        duckpond.crc2.strokeStyle = "rgb( 28, 98, 230)";
        duckpond.crc2.stroke(pond);
        duckpond.crc2.fillStyle = "rgb( 28, 98, 230)";
        duckpond.crc2.fill(pond);
    }
    // Funktion zum Zeichen des Baumes
    function drawTree() {
        // Funktion zum Erstellen eines grünen Kreises für die Blätter des Baumes
        function createTreeLeaves(_x, _y, _r) {
            let treeLeaves = new Path2D();
            duckpond.crc2.beginPath();
            treeLeaves.arc(_x, _y, _r, 0, 2 * Math.PI);
            duckpond.crc2.strokeStyle = "rgb( 3, 102, 24)";
            duckpond.crc2.stroke(treeLeaves);
            duckpond.crc2.fillStyle = "rgb( 3, 102, 24)";
            duckpond.crc2.fill(treeLeaves);
        }
        // Zeichnen des Baumstamms
        let tree = new Path2D();
        let x = 0;
        let y = 0;
        duckpond.crc2.beginPath();
        tree.moveTo(x + 265, y + 560);
        tree.bezierCurveTo(x + 255, y + 550, x + 250, y + 540, x + 250, y + 480);
        tree.lineTo(x + 250, y + 415);
        tree.lineTo(205, 415);
        tree.bezierCurveTo(x + 205, y + 480, x + 210, y + 540, x + 190, y + 560);
        tree.lineTo(265, 560);
        duckpond.crc2.strokeStyle = "rgb( 69, 51, 25)";
        duckpond.crc2.stroke(tree);
        duckpond.crc2.fillStyle = "rgb( 69, 51, 25)";
        duckpond.crc2.fill(tree);
        // Positionieren der grünen Kreise zum Erzeugen der Blätterkrone des Baumes
        createTreeLeaves(205, 365, 60);
        createTreeLeaves(260, 375, 50);
        createTreeLeaves(190, 325, 70);
        createTreeLeaves(180, 270, 40);
        createTreeLeaves(220, 260, 50);
        createTreeLeaves(280, 330, 60);
        createTreeLeaves(290, 290, 50);
        createTreeLeaves(255, 265, 45);
    }
    // Funktion zum Zeichnen aller nicht-beweglichen Elemente
    function drawBackground() {
        // Himmel
        duckpond.crc2.fillStyle = "rgb(159, 235, 252)";
        duckpond.crc2.fillRect(0, 0, duckpond.crc2.canvas.width, duckpond.crc2.canvas.height);
        // Gras
        duckpond.crc2.fillStyle = "rgb( 87, 204, 78)";
        duckpond.crc2.fillRect(0, 310, 1080, 720);
        // einfügen der Elemente
        drawHills();
        drawPond();
        drawTree();
    }
})(duckpond || (duckpond = {}));
//# sourceMappingURL=duckpond.js.map