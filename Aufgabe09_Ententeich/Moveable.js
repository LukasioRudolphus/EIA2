"use strict";
var duckpond;
(function (duckpond) {
    class Moveable {
        position;
        speed;
        constructor(_x, _y) {
            this.position = new duckpond.Vector(_x, _y);
            this.speed = new duckpond.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = new duckpond.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            return offset;
        }
        draw() {
            // Hier könnte Ihre Methode stehen
        }
    }
    duckpond.Moveable = Moveable;
})(duckpond || (duckpond = {}));
//# sourceMappingURL=Moveable.js.map