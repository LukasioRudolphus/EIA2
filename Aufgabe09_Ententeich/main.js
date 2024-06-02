"use strict";
var duckpond;
(function (duckpond) {
    class Cloud {
        position;
        size;
        speed;
        // Zuweisen der Eigenschaften zum Objekt bei der Erstellung dessen
        constructor(_x, _y, _xS, _yS) {
            this.position = new duckpond.Vector(_x, _y);
            this.size = new duckpond.Vector(_xS, _yS);
            this.speed = new duckpond.Vector(4, 0);
        }
        // Methode zum Bewegen des Objekts
        move(_timeslice) {
            let offset = new duckpond.Vector(this.speed.x, 0);
            // Damit die Wolken wieder rechts ins Bild kommen, nachdem sie es links verlassen
            if (this.position.x > (duckpond.crc2.canvas.width + 150)) {
                this.position.x -= (duckpond.crc2.canvas.width + 300);
            }
            offset.scale(_timeslice);
            this.position.add(offset);
            // notwendig, um putImageData richtig zu positionieren
            return this.position;
        }
        // Methode zum Zeichnen des Objekts
        draw() {
            duckpond.crc2.save();
            duckpond.crc2.translate(this.position.x, this.position.y);
            let nParticles = 30;
            let radiusParticle = 40;
            let particle = new Path2D();
            let gradient = duckpond.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.5)");
            duckpond.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                duckpond.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                duckpond.crc2.translate(x, y);
                duckpond.crc2.fill(particle);
                duckpond.crc2.restore();
            }
            duckpond.crc2.restore();
            // abspeichern des Bildes, damit dieses dann bewegt werden kann und nicht jedesmal eine neue Wolke erstellt wird
            let positionCloud = duckpond.crc2.getImageData(this.position.x - 140, this.position.y - 90, this.position.x + 150, this.position.y + 50);
            return positionCloud;
        }
    }
    duckpond.Cloud = Cloud;
})(duckpond || (duckpond = {}));
var duckpond;
(function (duckpond) {
    class Duck {
        position;
        speed;
        legs;
        // Zuweisen der Eigenschaften zum Objekt bei der Erstellung dessen
        constructor(_x, _y, _legs) {
            this.position = new duckpond.Vector(_x, _y);
            this.speed = new duckpond.Vector(0, 0);
            this.speed.random(10, 20);
            this.legs = _legs;
        }
        // Methode zum Bewegen der Enten
        move(_timeslice) {
            let offset = new duckpond.Vector(this.speed.x, this.speed.y);
            if (this.legs == false) {
                // damit die Enten nicht aus dem Teich herausschwimmen
                if (this.position.x < -70 || this.position.x > 205) {
                    offset.scale(-1);
                    this.speed.x *= -1;
                }
                if (this.position.y < -10 || this.position.y > 115) {
                    offset.scale(-1);
                    this.speed.y *= -1;
                }
            }
            if (this.legs == true) {
                // damit die Enten auf der Wiese bleiben
                if (this.position.x >= 339) {
                    if (this.position.x < 340 || this.position.x > 555) {
                        offset.scale(-1);
                        this.speed.x *= -1;
                    }
                    if (this.position.y < 20 || this.position.y > 209) {
                        offset.scale(-1);
                        this.speed.y *= -1;
                    }
                }
                else if (this.position.x <= -100) {
                    if (this.position.x < -496 || this.position.x > -180) {
                        offset.scale(-1);
                        this.speed.x *= -1;
                    }
                    if (this.position.y < 80 || this.position.y > 209) {
                        offset.scale(-1);
                        this.speed.y *= -1;
                    }
                }
            }
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        // Zeichnen der Enten
        draw() {
            duckpond.crc2.save();
            duckpond.crc2.translate(this.position.x, this.position.y);
            // Torso
            duckpond.crc2.beginPath();
            let duckBody = new Path2D();
            duckBody.moveTo(515, 500);
            duckBody.bezierCurveTo(510, 498, 505, 498, 500, 500);
            duckBody.bezierCurveTo(499, 499, 498, 498, 499, 497);
            duckBody.bezierCurveTo(497, 501, 499, 504, 500, 505);
            duckBody.bezierCurveTo(505, 507, 510, 507, 517, 505);
            duckBody.bezierCurveTo(518.5, 498, 518.5, 496, 518, 494);
            duckBody.lineTo(515, 494);
            duckBody.bezierCurveTo(516, 496, 516, 496, 515, 500);
            duckpond.crc2.strokeStyle = "rgb( 0, 0, 0)";
            duckpond.crc2.stroke(duckBody);
            duckpond.crc2.fillStyle = "rgb( 0, 0, 0)";
            duckpond.crc2.fill(duckBody);
            // Kopf
            duckpond.crc2.beginPath();
            let duckHead = new Path2D();
            duckHead.arc(518, 494, 2.5, 0, 360);
            duckHead.moveTo(515, 494);
            duckpond.crc2.strokeStyle = "rgb( 0, 0, 0)";
            duckpond.crc2.stroke(duckHead);
            duckpond.crc2.fillStyle = "rgb( 0, 0, 0)";
            duckpond.crc2.fill(duckHead);
            // Schnabel
            duckpond.crc2.beginPath();
            let duckBeak = new Path2D();
            duckBeak.moveTo(520, 493);
            duckBeak.bezierCurveTo(521, 495, 521, 495, 523, 494);
            duckpond.crc2.strokeStyle = "rgb( 0, 0, 0)";
            duckpond.crc2.stroke(duckBeak);
            duckpond.crc2.fillStyle = "rgb( 0, 0, 0)";
            duckpond.crc2.fill(duckBeak);
            if (this.legs == true) {
                // Beine (wenn sie welche haben)
                duckpond.crc2.beginPath();
                let duckLegs = new Path2D();
                duckLegs.moveTo(507, 507);
                duckLegs.lineTo(507, 510);
                duckLegs.moveTo(510, 507);
                duckLegs.lineTo(510, 510);
                duckLegs.moveTo(505, 510);
                duckLegs.lineTo(513, 510);
                duckpond.crc2.strokeStyle = "rgb( 0, 0, 0)";
                duckpond.crc2.stroke(duckLegs);
                duckpond.crc2.fillStyle = "rgb( 0, 0, 0)";
                duckpond.crc2.fill(duckLegs);
            }
            duckpond.crc2.restore();
        }
    }
    duckpond.Duck = Duck;
})(duckpond || (duckpond = {}));
var duckpond;
(function (duckpond) {
    class Insect {
        position;
        speed;
        constructor(_x, _y) {
            this.position = new duckpond.Vector(_x, _y);
            this.speed = new duckpond.Vector(0, 0);
        }
        // Methode zum Bewegen der Insekten
        move(_timeslice) {
            this.speed.random(10, 20);
            let offset = new duckpond.Vector(this.speed.x, this.speed.y);
            // damit die Insekten beim herausfliegen auf einer Seite auf der anderen wieder reinkommen
            if (this.position.x > duckpond.crc2.canvas.width) {
                this.position.x -= duckpond.crc2.canvas.width;
            }
            if (this.position.x < 0) {
                this.position.x += duckpond.crc2.canvas.width;
            }
            if (this.position.y > duckpond.crc2.canvas.height) {
                this.position.y -= duckpond.crc2.canvas.height;
            }
            if (this.position.y < 0) {
                this.position.y += duckpond.crc2.canvas.height;
            }
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        // Zeichnen der Insekten
        draw() {
            duckpond.crc2.save();
            duckpond.crc2.translate(this.position.x, this.position.y);
            duckpond.crc2.beginPath();
            let insect = new Path2D();
            insect.rect(0, 1, 2, 1);
            duckpond.crc2.strokeStyle = "rgb( 100, 100, 100)";
            duckpond.crc2.stroke(insect);
            duckpond.crc2.fillStyle = "rgb( 100, 100, 100)";
            duckpond.crc2.fill(insect);
            duckpond.crc2.beginPath();
            let insectWing = new Path2D();
            insectWing.rect(-1, 0, 1.5, 1);
            duckpond.crc2.strokeStyle = "rgb( 200, 200, 200)";
            duckpond.crc2.stroke(insectWing);
            duckpond.crc2.fillStyle = "rgb( 200, 200, 200)";
            duckpond.crc2.fill(insectWing);
            duckpond.crc2.restore();
        }
    }
    duckpond.Insect = Insect;
})(duckpond || (duckpond = {}));
var duckpond;
(function (duckpond) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
        }
    }
    duckpond.Vector = Vector;
})(duckpond || (duckpond = {}));
var duckpond;
(function (duckpond) {
    window.addEventListener("load", handleLoad);
    let ducks = [];
    let ducksWithLegs = [];
    let clouds = [];
    let insects = [];
    let bird;
    let cloud1;
    let picCloud1;
    let insecT;
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
        for (let i = 0; i < 21; i++) {
            if (i % 3 == 0) {
                // im Teich
                bird = new duckpond.Duck(50, 50, false);
                ducks.push(bird);
                bird.draw();
            }
            else if (i % 2 == 0) {
                // auf der Wiese
                bird = new duckpond.Duck(450, 150, true);
                ducksWithLegs.push(bird);
                bird.draw();
            }
            else {
                bird = new duckpond.Duck(-410, 150, true);
                ducksWithLegs.push(bird);
                bird.draw();
            }
        }
        // Erstellen der Wolke
        cloud1 = new duckpond.Cloud(150, 120, 200, 40);
        picCloud1 = cloud1.draw();
        clouds.push(cloud1);
        for (let i = 0; i < 15; i++) {
            insecT = new duckpond.Insect((Math.random() * 1080), (Math.random() * 720));
            insecT.draw();
            insects.push(insecT);
        }
        // Funktion, die in einem regelmäßigen Intervall aufgerufen wird, um im Bild Bewegung zu simulieren
        window.setInterval(update, 20);
    }
    function update() {
        // Bild wird neu gezeichnet, zuerst Hintergrund
        drawBackground();
        // dann die Enten im Teich an der neuen Position
        for (let duck of ducks) {
            duck.move(0.5);
            duck.draw();
        }
        // dann die Enten auf der Wiese
        for (let duckWithLegs of ducksWithLegs) {
            duckWithLegs.move(0.2);
            duckWithLegs.draw();
        }
        // dann die Wolken
        for (let cloud of clouds) {
            let cloudPos = cloud.move(0.3);
            duckpond.crc2.putImageData(picCloud1, cloudPos.x - 150, 30);
        }
        // und dann die Insekten
        for (let insect of insects) {
            insect.move(10);
            insect.draw();
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
    // function doIt(): void {
    //     let lineDort: Path2D = new Path2D();
    //     crc2.beginPath();
    //     lineDort.moveTo(0, 570);
    //     lineDort.lineTo(350, 570);
    //     lineDort.lineTo(350, 720);
    //     crc2.strokeStyle = "rgb( 0, 0, 0)";
    //     crc2.stroke(lineDort);
    // }
    // function doThat(): void {
    //     let lineHier: Path2D = new Path2D();
    //     crc2.beginPath();
    //     lineHier.moveTo(830, 720);
    //     lineHier.lineTo(830, 500);
    //     lineHier.lineTo(1080, 500);
    //     crc2.strokeStyle = "rgb( 0, 0, 0)";
    //     crc2.stroke(lineHier);
    // }
})(duckpond || (duckpond = {}));
//# sourceMappingURL=main.js.map