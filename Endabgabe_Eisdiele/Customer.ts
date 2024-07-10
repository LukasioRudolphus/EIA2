namespace icecream {
    export class Customer {
        position: Vector;
        speed: Vector;
        customerState: String[];
        mood: number;
        goal: Vector;

        constructor() {
            this.position = new Vector(100, 100);
            this.speed = new Vector(10, 10);
            this.customerState = ["rgb(35, 201, 2)", "rgb(240, 206, 12)", "rgb(191, 32, 8)"];
            this.mood = 0;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            
            let customer: Path2D = new Path2D();
            crc2.beginPath();
            customer.arc(0, 0, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "" + this.customerState[0] + "";
            crc2.stroke(customer);
            crc2.fillStyle = "" + this.customerState[0] + "";
            crc2.fill(customer);

            crc2.restore();
        }

        destination(_location: Vector): void {
            let goalX = _location.x - this.position.x;
            let goalY = _location.y - this.position.y;
            this.goal = new Vector(goalX, goalY);
        }

        move(): void {
            let offset: Vector;
            if (this.goal.x <= 0) {
                this.speed.x = 0;
            }
            if (this.goal.y <= 0) {
                this.speed.y = 0;
            }
            offset = new Vector(this.speed.x, this.speed.y);
            this.position.add(offset);
            this.goal.x -= 10;
            this.goal.y -= 10;

        }

        leave(): void {
            let aChair = new Vector(this.position.x, this.position.y);
            allChairs.push(aChair); 
        }

        happiness(): void {
            this.mood++;
            if (this.mood <= 100) {
                this.leave();
            }
        }
    }
}