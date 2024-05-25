namespace duckpond {
    export class Cloud {
        position: Vector;
        size: Vector;
        speed: Vector;

        // Zuweisen der Eigenschaften zum Objekt bei der Erstellung dessen
        constructor(_x: number, _y: number, _xS: number, _yS: number) {
            this.position = new Vector(_x, _y);
            this.size = new Vector(_xS, _yS);
            this.speed = new Vector(4, 0);
        }

        // Methode zum Bewegen des Objekts
        move(_timeslice: number): Vector {
            let offset: Vector = new Vector(this.speed.x, 0);
            // Damit die Wolken wieder rechts ins Bild kommen, nachdem sie es links verlassen
            if (this.position.x > (crc2.canvas.width + 150)) {
                this.position.x -= (crc2.canvas.width + 300);
            }

            offset.scale(_timeslice);
            this.position.add(offset);
            // notwendig, um putImageData richtig zu positionieren
            return this.position;
        }

        // Methode zum Zeichnen des Objekts
        draw(): ImageData {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
    
            let nParticles: number = 30;
            let radiusParticle: number = 40;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0,radiusParticle);
    
            particle.arc(0, 0, radiusParticle, 0, 2* Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.5)");

            crc2.fillStyle = gradient;
            
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random() * this.size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
            // abspeichern des Bildes, damit dieses dann bewegt werden kann und nicht jedesmal eine neue Wolke erstellt wird
            let positionCloud = crc2.getImageData(this.position.x - 140, this.position.y - 90, this.position.x + 150, this.position.y + 50);
            return positionCloud;
        }
    }
}