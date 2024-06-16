namespace duckpond {
    export class Moveable {
        position: Vector;
        speed: Vector;

        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            this.speed = new Vector(0, 0);
        }

        move(_timeslice: number): any {
            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            return offset;
        }

        draw(): any {
            // Hier könnte Ihre Methode stehen
        }

        // drawClickBox(): any {
        //     // Hier könnte Ihre Methode stehen
        // }
    }
}