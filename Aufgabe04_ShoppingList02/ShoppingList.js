"use strict";
var shoppingList;
(function (shoppingList) {
    window.addEventListener("load", nowLoad);
    function nowLoad(_event) {
        let fieldAmount = document.getElementsByClassName("amount");
        for (let i = 0; i < fieldAmount.length; i++) {
            fieldAmount[i].addEventListener("input", logAmount);
        }
        let fieldCheck = document.getElementsByClassName("bought");
        for (let i = 0; i < fieldCheck.length; i++) {
            fieldCheck[i].addEventListener("click", logCheck);
        }
        let fieldDelete = document.getElementsByClassName("deleteEntry");
        for (let i = 0; i < fieldDelete.length; i++) {
            fieldDelete[i].addEventListener("click", logDelete);
        }
        let fieldComment = document.getElementsByClassName("comment");
        for (let i = 0; i < fieldComment.length; i++) {
            fieldComment[i].addEventListener("change", logComment);
        }
        console.log(shoppingList.dataList);
        document.getElementById("newEntry")?.addEventListener("click", generateContent);
    }
    function generateContent(_event) {
        let nthEntry = document.createElement("fieldset");
        document.querySelector("#list")?.appendChild(nthEntry);
        nthEntry.setAttribute("class", "entry");
        nthEntry.setAttribute("id", "entry1");
        let nthItemName = document.createElement("h2");
        document.querySelector("#entry1")?.appendChild(nthItemName);
        nthItemName.setAttribute("class", "itemName");
        let nthAmount = document.createElement("input");
        document.querySelector("#entry1")?.appendChild(nthAmount);
        nthAmount.setAttribute("class", "amount");
        nthItemName.setAttribute("name", "itemAmount");
        nthAmount.type = "number";
        let nthComment = document.createElement("textarea");
        document.querySelector("#entry1")?.appendChild(nthComment);
        nthComment.setAttribute("class", "comment");
        nthComment.setAttribute("name", "commentarea");
        nthComment.setAttribute("cols", "30");
        nthComment.setAttribute("rows", "1");
        let nthCheckboxBought = document.createElement("input");
        document.querySelector("#entry1")?.appendChild(nthCheckboxBought);
        nthCheckboxBought.setAttribute("class", "bought");
        nthItemName.setAttribute("name", "wasBought");
        nthCheckboxBought.type = "checkbox";
        let nthDeleteButton = document.createElement("button");
        document.querySelector("#entry1")?.appendChild(nthDeleteButton);
        nthDeleteButton.setAttribute("class", "deleteEntry");
        let nthDeleteIcon = document.createElement("i");
        document.querySelector(".deleteEntry")?.appendChild(nthDeleteIcon);
        nthDeleteIcon.setAttribute("class", "fa-solid fa-trash-can");
        let nthDateLastBought = document.createElement("input");
        document.querySelector("#entry1")?.appendChild(nthDateLastBought);
        nthDateLastBought.setAttribute("class", "lastPurchase");
        nthItemName.setAttribute("name", "dateOfLastPurchase");
        nthDateLastBought.type = "date";
    }
    function logAmount() {
        console.log("Anzahl: " + this.value);
    }
    function logCheck(_event) {
        console.log("Kauf wurde vollzogen.");
    }
    function logDelete(_event) {
        console.log("Delete?");
    }
    function logComment() {
        console.log("Kommentar: " + this.value);
    }
})(shoppingList || (shoppingList = {}));
//# sourceMappingURL=ShoppingList.js.map