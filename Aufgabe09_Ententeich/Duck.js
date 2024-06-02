"use strict";
var duckpond;
(function (duckpond) {
    class Duck extends duckpond.Moveable {
        legs;
        // Zuweisen der Eigenschaften zum Objekt bei der Erstellung dessen
        constructor(_x, _y, _legs) {
            super(_x, _y);
            this.speed.random(10, 20);
            this.legs = _legs;
        }
        // Methode zum Bewegen der Enten
        move(_timeslice) {
            let offset = super.move(_timeslice);
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
            this.position.add(offset);
        }
        hasLegs() {
            return this.legs;
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
//# sourceMappingURL=Duck.js.map