"use strict";
var shoppingList;
(function (shoppingList) {
    window.addEventListener("load", nowLoad);
    function nowLoad(_event) {
        console.log("jo");
        let fieldAmount = document.getElementsByClassName("amount");
        for (let i = 0; i < fieldAmount.length; i++) {
            fieldAmount[i].addEventListener("input", logAmount);
            console.log("hi");
        }
        let fieldCheck = document.getElementsByClassName("bought");
        console.log(fieldCheck);
        for (let i = 0; i < fieldCheck.length; i++) {
            fieldCheck[i].addEventListener("click", logCheck);
            console.log("ho");
        }
        let fieldDelete = document.getElementsByClassName("deleteEntry");
        for (let i = 0; i < fieldDelete.length; i++) {
            fieldDelete[i].addEventListener("click", logDelete);
            console.log("he");
        }
        let fieldComment = document.getElementsByClassName("comment");
        for (let i = 0; i < fieldComment.length; i++) {
            fieldComment[i].addEventListener("change", logComment);
            console.log("he");
        }
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