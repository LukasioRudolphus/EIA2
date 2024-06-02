namespace duckpond {
    export class Insect {
        position: Vector;
        speed: Vector;

        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            this.speed = new Vector(0, 0);
        }

        // Methode zum Bewegen der Insekten
        move(_timeslice: number): void {
            this.speed.random(10, 20);

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            // damit die Insekten beim herausfliegen auf einer Seite auf der anderen wieder reinkommen
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width ;
            }
            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width ;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }

            offset.scale(_timeslice);
            this.position.add(offset);
        }

        // Zeichnen der Insekten
        draw (): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            let insect: Path2D = new Path2D();
            insect.rect(0, 1, 2, 1);
            crc2.strokeStyle = "rgb( 100, 100, 100)";
            crc2.stroke(insect);
            crc2.fillStyle = "rgb( 100, 100, 100)";
            crc2.fill(insect);

            crc2.beginPath();
            let insectWing: Path2D = new Path2D();
            insectWing.rect(-1, 0, 1.5, 1);
            crc2.strokeStyle = "rgb( 200, 200, 200)";
            crc2.stroke(insectWing);
            crc2.fillStyle = "rgb( 200, 200, 200)";
            crc2.fill(insectWing);

            crc2.restore();
        }
    }
}