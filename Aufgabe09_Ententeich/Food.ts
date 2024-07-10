namespace duckpond {
    export class Food {
        position: Vector;

        constructor(_click: Vector) {
            this.position = _click;
            console.log(this.position.x);
        }

        draw(){
            let breadCrumb: Path2D = new Path2D();
            console.log("hi");
            crc2.beginPath();
            breadCrumb.moveTo(this.position.x + 3, this.position.y - 4);
            breadCrumb.arc(this.position.x + 3, this.position.y - 4, 2, 0, 2 * Math.PI);
            breadCrumb.moveTo(this.position.x - 3, this.position.y - 4);
            breadCrumb.arc(this.position.x - 3, this.position.y - 4, 2, 0, 2 * Math.PI);
            breadCrumb.moveTo(this.position.x, this.position.y + 2);
            breadCrumb.arc(this.position.x, this.position.y + 2, 2, 0, 2 * Math.PI);
            crc2.strokeStyle = "rgb( 196, 145, 35)";
            crc2.stroke(breadCrumb);
            crc2.fillStyle = "rgb( 196, 145, 35)";
            crc2.fill(breadCrumb);
        }
    }
}