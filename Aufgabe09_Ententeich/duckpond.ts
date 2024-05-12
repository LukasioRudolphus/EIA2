namespace duckpond {
    let canvasField: HTMLCanvasElement = document.querySelector("canvas")!;
    let crc2: CanvasRenderingContext2D = canvasField.getContext("2d")!;

    crc2.fillStyle = "rgb(159, 235, 252)";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    crc2.fillStyle = "rgb( 87, 204, 78)";
    crc2.fillRect( 0, 310, 1080, 720);

    function createHill( _x: number, _y: number) {
        let hills: Path2D = new Path2D();
        crc2.beginPath();
        hills.moveTo(_x + 0, _y + 330);
        hills.bezierCurveTo(_x + 30, _y + 320, _x + 80, _y + 270, _x + 130, _y + 260);
        hills.bezierCurveTo(_x + 145, _y + 257, _x + 165, _y + 257, _x + 180, _y + 260);
        hills.bezierCurveTo(_x + 220, _y + 267, _x + 260, _y + 320, _x + 310, _y + 330);
        crc2.strokeStyle = "rgb( 24, 156, 63)";
        crc2.stroke(hills);
        let gradient: CanvasGradient = crc2.createLinearGradient(0, _y + 257, 0, _y + 330);
        gradient.addColorStop(0, "rgb( 24, 171, 63)");
        gradient.addColorStop(0.9, "rgb( 87, 204, 78)");
        crc2.fillStyle = gradient;
        crc2.fill(hills);
    }

    createHill(880, 0);
    createHill(940, -20);
    crc2.fillStyle = "rgb( 87, 204, 78)";
    crc2.fillRect( 900, 310, 1080, 330);
    createHill(600, -10);
    createHill(160, 10);
    createHill(120, 20);
    createHill(-120, 10);
    createHill(-20, 5);
    createHill(500, 5);
    createHill(260, 0);
    createHill(780, 0);

    crc2.fillStyle = "rgb( 87, 204, 78)";
    crc2.fillRect( 0, 330, 1080, 720);

    let pond: Path2D = new Path2D();
    crc2.beginPath();
    pond.moveTo(400, 610);
    pond.bezierCurveTo(350, 580, 350, 520, 390, 500);
    pond.bezierCurveTo(395, 498, 400, 493, 400, 490);
    pond.bezierCurveTo(410, 450, 620, 400, 740, 500);
    pond.bezierCurveTo(910, 560, 750, 680, 580, 630);
    pond.bezierCurveTo(560, 645, 420, 640, 400, 610);
    crc2.strokeStyle = "rgb( 28, 98, 230)";
    crc2.stroke(pond);
    crc2.fillStyle = "rgb( 28, 98, 230)";
    crc2.fill(pond);
}