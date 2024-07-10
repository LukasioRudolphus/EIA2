"use strict";
var icecream;
(function (icecream) {
    class Customer {
        position;
        speed;
        customerState;
        mood;
        goal;
        constructor() {
            this.position = new icecream.Vector(100, 100);
            this.speed = new icecream.Vector(10, 10);
            this.customerState = ["rgb(35, 201, 2)", "rgb(240, 206, 12)", "rgb(191, 32, 8)"];
            this.mood = 0;
        }
        draw() {
            icecream.crc2.save();
            icecream.crc2.translate(this.position.x, this.position.y);
            let customer = new Path2D();
            icecream.crc2.beginPath();
            customer.arc(0, 0, 40, 0, 2 * Math.PI);
            icecream.crc2.strokeStyle = "" + this.customerState[0] + "";
            icecream.crc2.stroke(customer);
            icecream.crc2.fillStyle = "" + this.customerState[0] + "";
            icecream.crc2.fill(customer);
            icecream.crc2.restore();
        }
        destination(_location) {
            let goalX = _location.x - this.position.x;
            let goalY = _location.y - this.position.y;
            this.goal = new icecream.Vector(goalX, goalY);
        }
        move() {
            let offset;
            if (this.goal.x <= 0) {
                this.speed.x = 0;
            }
            if (this.goal.y <= 0) {
                this.speed.y = 0;
            }
            offset = new icecream.Vector(this.speed.x, this.speed.y);
            this.position.add(offset);
            this.goal.x -= 10;
            this.goal.y -= 10;
        }
        leave() {
            let aChair = new icecream.Vector(this.position.x, this.position.y);
            icecream.allChairs.push(aChair);
        }
        happiness() {
            this.mood++;
            if (this.mood <= 100) {
                this.leave();
            }
        }
    }
    icecream.Customer = Customer;
})(icecream || (icecream = {}));
//# sourceMappingURL=Customer.js.map