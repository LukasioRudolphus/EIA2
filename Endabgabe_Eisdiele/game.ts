namespace icecream {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    
    let canvasField: HTMLCanvasElement;
    let aCustomer: Customer;
    let allCustomers: Customer[] = [];
    let aChair: Vector;
    export let allChairs: Vector[] = [];
    let count: number = 0;

    function handleLoad(_event: Event): void {
        canvasField = document.querySelector("canvas")!;
        if(!canvasField){
            return
        }
        canvasField.width = window.innerWidth;
        canvasField.height = window.innerHeight;
        crc2 = <CanvasRenderingContext2D>canvasField.getContext("2d")!;

        drawBackground();
        makeTable(250, 330);
        makeTable(1100, 220);
        makeTable(1250, 700);

        aCustomer = new Customer();
        allCustomers.push(aCustomer);
        aCustomer.draw();
        platzZuweisung(aCustomer);

        // console.log(allChairs);

        // window.setInterval(update, 20);
    }

    function update(): void {
        count++;
        console.log(allChairs.length);
        // console.log(allCustomers.length);
        // console.log(count);
        if (count % 100 == 0 && allCustomers.length < 12) {
            aCustomer = new Customer();
            allCustomers.push(aCustomer);
            aCustomer.draw();
            platzZuweisung(aCustomer);
        }
        // Bild wird neu gezeichnet, zuerst der Hintergrund
        drawBackground();
        for (let customer of allCustomers) {
            customer.move();
            customer.draw();
        }
    }

    function drawBackground(): void {
        // 
        crc2.fillStyle = "rgb(199, 197, 195)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.fillStyle = "rgb(252, 242, 182)";
        crc2.fillRect(0, 650, 1000, crc2.canvas.height);

        // einfügen der Elemente
        drawTable(250, 330);
        drawTable(1100, 220);
        drawTable(1250, 700);
    }

    function drawTable(_x: number, _y: number): void {
        let table: Path2D = new Path2D();
        crc2.beginPath();
        table.arc(_x, _y, 60, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgb(125, 81, 6)";
        crc2.stroke(table);
        crc2.fillStyle = "rgb(125, 81, 6)";
        crc2.fill(table);
        drawChair(_x, _y - 110);
        drawChair(_x + 110, _y);
        drawChair(_x, _y + 110);
        drawChair(_x - 110, _y);
    }

    function drawChair(_x: number, _y: number): void {
        let chair: Path2D = new Path2D();
        crc2.beginPath();
        chair.arc(_x, _y, 25, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgb(125, 81, 6)";
        crc2.stroke(chair);
        crc2.fillStyle = "rgb(125, 81, 6)";
        crc2.fill(chair);
    }

    function makeTable(_x: number, _y: number): void {
        let table: Path2D = new Path2D();
        crc2.beginPath();
        table.arc(_x, _y, 60, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgb(125, 81, 6)";
        crc2.stroke(table);
        crc2.fillStyle = "rgb(125, 81, 6)";
        crc2.fill(table);
        makeChair(_x, _y - 110);
        makeChair(_x + 110, _y);
        makeChair(_x, _y + 110);
        makeChair(_x - 110, _y);
    }

    function makeChair(_x: number, _y: number): void {
        let chair: Path2D = new Path2D();
        crc2.beginPath();
        chair.arc(_x, _y, 25, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgb(125, 81, 6)";
        crc2.stroke(chair);
        crc2.fillStyle = "rgb(125, 81, 6)";
        crc2.fill(chair);
        aChair = new Vector(_x, _y);
        allChairs.push(aChair); 
    }

    function platzZuweisung(_c: Customer): void {
        let i: number;
        if (allChairs.length > 0) {
            i = Math.floor(Math.random()*allChairs.length);
            _c.destination(allChairs[i]);
            allChairs.splice(i, 1);
        }
    }

}

