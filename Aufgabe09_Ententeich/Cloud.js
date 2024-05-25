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
            console.log("Cloud", this.position, this.size);
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
//# sourceMappingURL=Cloud.js.map