namespace duckpond {
    export class Duck extends Moveable {
        public legs: boolean;
        color: string;

        // Zuweisen der Eigenschaften zum Objekt bei der Erstellung dessen
        constructor(_x: number, _y: number, _legs: boolean) {
            super(_x, _y);
            this.speed.random(10, 20);
            this.legs = _legs;
            this.color = "rgb( 0, 0, 0)";
        }

        // Methode zum Bewegen der Enten
        move(_timeslice: number): void {
            let offset: Vector = super.move(_timeslice);

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
                } else if (this.position.x <= -100){
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

        clickBox(_clickPoint: Vector): void {
            if (this.legs == false) {
                // schauen, ob der click die HitBox der Ente getroffen hat (ohne Beine)
                if ((_clickPoint.x >= 497 + this.position.x && _clickPoint.x <= 523 + this.position.x) && (_clickPoint.y >= 491 + this.position.y && _clickPoint.y <= 507 + this.position.y)) {
                    // Ente bekommt eine zufällige Farbe
                    this.color = "rgb( " + Math.random() * 256 + ", " + Math.random() * 256 + ", " + Math.random() * 256 + ")";
                }
            } else {
                // schauen, ob der click die HitBox der Ente getroffen hat (mit Beinen)
                if ((_clickPoint.x >= 497 + this.position.x && _clickPoint.x <= 523 + this.position.x) && (_clickPoint.y >= 491 + this.position.y && _clickPoint.y <= 510 + this.position.y)) {
                    // Ente bekommt eine zufällige Farbe
                    this.color = "rgb( " + Math.random() * 256 + ", " + Math.random() * 256 + ", " + Math.random() * 256 + ")";
                }
            }
        }

        // Zeichnen der Enten
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // Torso
            crc2.beginPath();
            let duckBody: Path2D = new Path2D();
            duckBody.moveTo(515, 500);
            duckBody.bezierCurveTo(510, 498, 505, 498, 500, 500);
            duckBody.bezierCurveTo(499, 499, 498, 498, 499, 497);
            duckBody.bezierCurveTo(497, 501, 499, 504, 500, 505);
            duckBody.bezierCurveTo(505, 507, 510, 507, 517, 505);
            duckBody.bezierCurveTo(518.5, 498, 518.5, 496, 518, 494);
            duckBody.lineTo(515, 494);
            duckBody.bezierCurveTo(516, 496, 516, 496, 515, 500);
            crc2.strokeStyle = this.color;
            crc2.stroke(duckBody);
            crc2.fillStyle = this.color;
            crc2.fill(duckBody);
        
            // Kopf
            crc2.beginPath();
            let duckHead: Path2D = new Path2D();
            duckHead.arc(518, 494, 2.5, 0, 360);
            duckHead.moveTo(515, 494);
            crc2.strokeStyle = this.color;
            crc2.stroke(duckHead);
            crc2.fillStyle = this.color;
            crc2.fill(duckHead);
        
            // Schnabel
            crc2.beginPath();
            let duckBeak: Path2D = new Path2D();
            duckBeak.moveTo(520, 493);
            duckBeak.bezierCurveTo(521, 495, 521, 495, 523, 494);
            crc2.strokeStyle = this.color;
            crc2.stroke(duckBeak);
            crc2.fillStyle = this.color;
            crc2.fill(duckBeak);

            if (this.legs == true) {
                // Beine (wenn sie welche haben)
                crc2.beginPath();
                let duckLegs: Path2D = new Path2D();
                duckLegs.moveTo(507, 507);
                duckLegs.lineTo(507, 510);
                duckLegs.moveTo(510, 507);
                duckLegs.lineTo(510, 510);
                duckLegs.moveTo(505, 510);
                duckLegs.lineTo(513, 510);
                crc2.strokeStyle = this.color;
                crc2.stroke(duckLegs);
                crc2.fillStyle = this.color;
                crc2.fill(duckLegs);
            }

            crc2.restore();
        }
        
    }
}