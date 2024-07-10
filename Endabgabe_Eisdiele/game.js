"use strict";
var icecream;
(function (icecream) {
    window.addEventListener("load", handleLoad);
    let canvasField;
    let aCustomer;
    let allCustomers = [];
    let aChair;
    icecream.allChairs = [];
    let count = 0;
    function handleLoad(_event) {
        canvasField = document.querySelector("canvas");
        if (!canvasField) {
            return;
        }
        canvasField.width = window.innerWidth;
        canvasField.height = window.innerHeight;
        icecream.crc2 = canvasField.getContext("2d");
        drawBackground();
        makeTable(250, 330);
        makeTable(1100, 220);
        makeTable(1250, 700);
        aCustomer = new icecream.Customer();
        allCustomers.push(aCustomer);
        aCustomer.draw();
        platzZuweisung(aCustomer);
        // console.log(allChairs);
        // window.setInterval(update, 20);
    }
    function update() {
        count++;
        console.log(icecream.allChairs.length);
        // console.log(allCustomers.length);
        // console.log(count);
        if (count % 100 == 0 && allCustomers.length < 12) {
            aCustomer = new icecream.Customer();
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
    function drawBackground() {
        // 
        icecream.crc2.fillStyle = "rgb(199, 197, 195)";
        icecream.crc2.fillRect(0, 0, icecream.crc2.canvas.width, icecream.crc2.canvas.height);
        icecream.crc2.fillStyle = "rgb(252, 242, 182)";
        icecream.crc2.fillRect(0, 650, 1000, icecream.crc2.canvas.height);
        // einfügen der Elemente
        drawTable(250, 330);
        drawTable(1100, 220);
        drawTable(1250, 700);
    }
    function drawTable(_x, _y) {
        let table = new Path2D();
        icecream.crc2.beginPath();
        table.arc(_x, _y, 60, 0, 2 * Math.PI);
        icecream.crc2.strokeStyle = "rgb(125, 81, 6)";
        icecream.crc2.stroke(table);
        icecream.crc2.fillStyle = "rgb(125, 81, 6)";
        icecream.crc2.fill(table);
        drawChair(_x, _y - 110);
        drawChair(_x + 110, _y);
        drawChair(_x, _y + 110);
        drawChair(_x - 110, _y);
    }
    function drawChair(_x, _y) {
        let chair = new Path2D();
        icecream.crc2.beginPath();
        chair.arc(_x, _y, 25, 0, 2 * Math.PI);
        icecream.crc2.strokeStyle = "rgb(125, 81, 6)";
        icecream.crc2.stroke(chair);
        icecream.crc2.fillStyle = "rgb(125, 81, 6)";
        icecream.crc2.fill(chair);
    }
    function makeTable(_x, _y) {
        let table = new Path2D();
        icecream.crc2.beginPath();
        table.arc(_x, _y, 60, 0, 2 * Math.PI);
        icecream.crc2.strokeStyle = "rgb(125, 81, 6)";
        icecream.crc2.stroke(table);
        icecream.crc2.fillStyle = "rgb(125, 81, 6)";
        icecream.crc2.fill(table);
        makeChair(_x, _y - 110);
        makeChair(_x + 110, _y);
        makeChair(_x, _y + 110);
        makeChair(_x - 110, _y);
    }
    function makeChair(_x, _y) {
        let chair = new Path2D();
        icecream.crc2.beginPath();
        chair.arc(_x, _y, 25, 0, 2 * Math.PI);
        icecream.crc2.strokeStyle = "rgb(125, 81, 6)";
        icecream.crc2.stroke(chair);
        icecream.crc2.fillStyle = "rgb(125, 81, 6)";
        icecream.crc2.fill(chair);
        aChair = new icecream.Vector(_x, _y);
        icecream.allChairs.push(aChair);
    }
    function platzZuweisung(_c) {
        let i;
        if (icecream.allChairs.length > 0) {
            i = Math.floor(Math.random() * icecream.allChairs.length);
            _c.destination(icecream.allChairs[i]);
            icecream.allChairs.splice(i, 1);
        }
    }
})(icecream || (icecream = {}));
//# sourceMappingURL=game.js.map