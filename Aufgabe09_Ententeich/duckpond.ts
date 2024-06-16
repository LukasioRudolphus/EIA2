namespace duckpond {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let moves: Moveable[] = [];
    let clouds: Cloud[] = [];
    let bird: Duck;
    let cloud1: Cloud;
    let picCloud1: ImageData;
    let insecT: Insect;
    let canvasField: HTMLCanvasElement;
    let clickPoint: Vector;
    let duckCounter: number = 0;
    let speedCloud: number = 0.3;

    // Funktion zu Generierung von allem Notwendigem beim Laden des Fensters
    function handleLoad(_event: Event): void {
        canvasField = document.querySelector("canvas")!;
        let birdButton = document.getElementById("moreBIRDS")!;
        if(!canvasField){
            return
        }
        crc2 = <CanvasRenderingContext2D>canvasField.getContext("2d")!;

        // Zeichnen des Hintergrunds
        drawBackground();

        // erstellen der Enten
        for (let i = 0; i < 21; i++) {
            if (i % 3 == 0) {
                // im Teich
                bird = new Duck(50, 50, false);
                moves.push(bird);
                bird.draw();
            } else if (i % 2 == 0) {
                // auf der Wiese
                bird = new Duck(450, 150, true);
                moves.push(bird);
                bird.draw();
            } else {
                bird = new Duck(-410, 150, true);
                moves.push(bird);
                bird.draw();
            }
            
        }

        // Erstellen der Wolke
        cloud1 = new Cloud(150, 120, 200, 40);
        picCloud1 = cloud1.draw();
        clouds.push(cloud1);

        for (let i = 0; i < 15; i++) {
            insecT = new Insect((Math.random() * 1080), (Math.random() * 720));
            insecT.draw();
            moves.push(insecT);
        }

        // Funktion, die in einem regelmäßigen Intervall aufgerufen wird, um im Bild Bewegung zu simulieren
        window.setInterval(update, 20);

        // Farbänderung der Enten auf Mausklick
        canvasField.addEventListener("click", colorChange);
        birdButton.addEventListener("click", addDuck);
        document.addEventListener("keydown", changeSpeed);
    }

    function changeSpeed(_event: KeyboardEvent): void {
        if (_event.key == "ArrowRight") {
            speedCloud += 0.1;
            console.log(speedCloud);
        } else if (_event.key == "ArrowLeft" && speedCloud >= 0.15) {
            speedCloud -= 0.1;
            console.log(speedCloud);
        }
    }

    function addDuck(): void {
        duckCounter++;
        if (duckCounter % 3 == 0) {
            // im Teich
            bird = new Duck(50, 50, false);
            moves.push(bird);
            bird.draw();
        } else if (duckCounter % 2 == 0) {
            // auf der Wiese
            bird = new Duck(450, 150, true);
            moves.push(bird);
            bird.draw();
        } else {
            bird = new Duck(-410, 150, true);
            moves.push(bird);
            bird.draw();
        }
    }

    function colorChange(_event: MouseEvent): void {
        let rect = canvasField.getBoundingClientRect();
        // speichern des Klickpunktes
        clickPoint = new Vector (_event.clientX - rect.left, _event.clientY - rect.top);
        for (let moveable of moves) {
            // Enten angeklickt?
            if (moveable instanceof Duck){
                if (moveable.legs == false) {
                    moveable.clickBox(clickPoint);
                } else {
                    moveable.clickBox(clickPoint);
                }
            }
        }
    }

    function update(): void {
        // Bild wird neu gezeichnet, zuerst der Hintergrund
        drawBackground();
        // dann die Wolken,
        for (let cloud of clouds) {
            let cloudPos = cloud.move(speedCloud);
            crc2.putImageData(picCloud1, cloudPos.x - 150, 30);
        }

        for (let moveable of moves) {
            // dann die Insekten
            if (moveable instanceof Insect)
                moveable.move(10);
            // und dann die Enten
            if (moveable instanceof Duck){
                if (moveable.legs == false) {
                    moveable.move(0.5);
                } else {
                    moveable.move(0.2);
                }
            } 
            moveable.draw();
        }

    }

    // Funktion zum Zeichnen der Hügel
    function drawHills(): void {
        // Funktion zum Zeichnen eine Hügels
        function createHill( _x: number, _y: number) {
            let hills: Path2D = new Path2D();
            crc2.beginPath();
            hills.moveTo(_x + 0, _y + 330);
            hills.bezierCurveTo(_x + 30, _y + 320, _x + 80, _y + 270, _x + 130, _y + 260);
            hills.bezierCurveTo(_x + 145, _y + 257, _x + 165, _y + 257, _x + 180, _y + 260);
            hills.bezierCurveTo(_x + 220, _y + 267, _x + 260, _y + 320, _x + 310, _y + 330);
            crc2.strokeStyle = "rgb( 24, 156, 63)";
            crc2.stroke(hills);
            // Faerbung der Hügel
            let gradient: CanvasGradient = crc2.createLinearGradient(0, _y + 257, 0, _y + 330);
            gradient.addColorStop(0, "rgb( 24, 171, 63)");
            gradient.addColorStop(0.9, "rgb( 87, 204, 78)");
            crc2.fillStyle = gradient;
            crc2.fill(hills);
        }
    
        // Positionieren der einzelnen Hügel
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
    }

    // Funktion zum Zeichnen des Teiches
    function drawPond(): void {
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

    // Funktion zum Zeichen des Baumes
    function drawTree(): void {
        // Funktion zum Erstellen eines grünen Kreises für die Blätter des Baumes
        function createTreeLeaves( _x: number, _y: number, _r: number) {
            let treeLeaves: Path2D = new Path2D();
            crc2.beginPath();
            treeLeaves.arc(_x, _y, _r, 0, 2 * Math.PI);
            crc2.strokeStyle = "rgb( 3, 102, 24)";
            crc2.stroke(treeLeaves);
            crc2.fillStyle = "rgb( 3, 102, 24)";
            crc2.fill(treeLeaves);
        }

        // Zeichnen des Baumstamms
        let tree: Path2D = new Path2D();
        let x = 0;
        let y = 0;
        crc2.beginPath();
        tree.moveTo(x + 265, y + 560);
        tree.bezierCurveTo(x + 255, y + 550, x + 250, y + 540, x + 250, y + 480);
        tree.lineTo(x + 250, y + 415);
        tree.lineTo(205, 415);
        tree.bezierCurveTo(x + 205, y + 480, x + 210, y + 540, x + 190, y + 560);
        tree.lineTo(265, 560);
        crc2.strokeStyle = "rgb( 69, 51, 25)";
        crc2.stroke(tree);
        crc2.fillStyle = "rgb( 69, 51, 25)";
        crc2.fill(tree);
    
        // Positionieren der grünen Kreise zum Erzeugen der Blätterkrone des Baumes
        createTreeLeaves(205, 365, 60);
        createTreeLeaves(260, 375, 50);
        createTreeLeaves(190, 325, 70);
        createTreeLeaves(180, 270, 40);
        createTreeLeaves(220, 260, 50);
        createTreeLeaves(280, 330, 60);
        createTreeLeaves(290, 290, 50);
        createTreeLeaves(255, 265, 45);
    }

    // Funktion zum Zeichnen aller nicht-beweglichen Elemente
    function drawBackground(): void {
        // Himmel
        crc2.fillStyle = "rgb(159, 235, 252)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
        // Gras
        crc2.fillStyle = "rgb( 87, 204, 78)";
        crc2.fillRect( 0, 310, 1080, 720);

        // einfügen der Elemente
        drawHills();
        drawPond();
        drawTree();
    }

    // function doIt(): void {
    //     let lineDort: Path2D = new Path2D();
    //     crc2.beginPath();
    //     lineDort.moveTo(0, 570);
    //     lineDort.lineTo(350, 570);
    //     lineDort.lineTo(350, 720);
    //     crc2.strokeStyle = "rgb( 0, 0, 0)";
    //     crc2.stroke(lineDort);
    // }

    // function doThat(): void {
    //     let lineHier: Path2D = new Path2D();
    //     crc2.beginPath();
    //     lineHier.moveTo(830, 720);
    //     lineHier.lineTo(830, 500);
    //     lineHier.lineTo(1080, 500);
    //     crc2.strokeStyle = "rgb( 0, 0, 0)";
    //     crc2.stroke(lineHier);
    // }
}