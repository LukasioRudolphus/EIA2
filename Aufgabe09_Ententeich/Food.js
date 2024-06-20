"use strict";
var duckpond;
(function (duckpond) {
    class Food {
        position;
        constructor(_click) {
            this.position = _click;
            console.log(this.position.x);
        }
        draw() {
            let breadCrumb = new Path2D();
            console.log("hi");
            duckpond.crc2.beginPath();
            breadCrumb.moveTo(this.position.x + 3, this.position.y - 4);
            breadCrumb.arc(this.position.x + 3, this.position.y - 4, 2, 0, 2 * Math.PI);
            breadCrumb.moveTo(this.position.x - 3, this.position.y - 4);
            breadCrumb.arc(this.position.x - 3, this.position.y - 4, 2, 0, 2 * Math.PI);
            breadCrumb.moveTo(this.position.x, this.position.y + 2);
            breadCrumb.arc(this.position.x, this.position.y + 2, 2, 0, 2 * Math.PI);
            duckpond.crc2.strokeStyle = "rgb( 196, 145, 35)";
            duckpond.crc2.stroke(breadCrumb);
            duckpond.crc2.fillStyle = "rgb( 196, 145, 35)";
            duckpond.crc2.fill(breadCrumb);
        }
    }
    duckpond.Food = Food;
})(duckpond || (duckpond = {}));
//# sourceMappingURL=Food.js.map