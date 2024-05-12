"use strict";
var task09;
(function (task09) {
    class Vector {
        x = 0;
        y = 0;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x += _x;
            this.y += _y;
        }
    }
    task09.Vector = Vector;
})(task09 || (task09 = {}));
//# sourceMappingURL=Vector.js.map