"use strict";
var duckpond;
(function (duckpond) {
    class Insect extends duckpond.Moveable {
        constructor(_x, _y) {
            super(_x, _y);
        }
        // Methode zum Bewegen der Insekten
        move(_timeslice) {
            this.speed.random(10, 20);
            let offset = super.move(_timeslice);
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
//# sourceMappingURL=Insect.js.map