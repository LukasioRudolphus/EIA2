"use strict";
var shoppingList;
(function (shoppingList) {
    // beim laden der Seite nowLoad ausführen
    window.addEventListener("load", nowLoad);
    // Funktion generateContent ausführen
    function nowLoad(_event) {
        generateContent();
    }
    // alle Listenelemente aus der Datenliste werten aufgebaut, und anschließned mit event listenern ausgestattet
    function generateContent() {
        // alles an vorhandenen Listenelementen loeschen
        deleteEverything();
        // for schleife, die dafuer sorgt, dass jeder Eintrag in der Datenliste generiert wird
        for (let i = 0; i < shoppingList.dataList.length; i++) {
            // legt fest, welcher Listeneintrag generiert werden soll
            let arrayEntry = shoppingList.dataList[i];
            // Box, die den Inhalt des Listenelements beinhaltet
            let nthEntry = document.createElement("fieldset");
            document.querySelector("#list")?.appendChild(nthEntry);
            nthEntry.setAttribute("class", "entry");
            nthEntry.setAttribute("id", "entry" + i);
            // Name des Listeneintrags
            let nthItemName = document.createElement("h2");
            document.querySelector("#entry" + i)?.appendChild(nthItemName);
            nthItemName.setAttribute("class", "itemName");
            nthItemName.innerHTML = arrayEntry["Name"];
            // Mengenangabe
            let nthAmount = document.createElement("input");
            nthAmount.setAttribute("class", "amount");
            nthAmount.setAttribute("name", "itemAmount");
            nthAmount.setAttribute("id", "itemAmount" + i);
            nthAmount.setAttribute("min", "1");
            nthAmount.type = "number";
            document.querySelector("#entry" + i)?.appendChild(nthAmount);
            nthEntry.innerHTML += "<br>";
            // Kommentarzeile
            let nthComment = document.createElement("textarea");
            document.querySelector("#entry" + i)?.appendChild(nthComment);
            nthComment.setAttribute("class", "comment");
            nthComment.setAttribute("id", "comment" + i);
            nthComment.setAttribute("name", "commentarea");
            nthComment.setAttribute("cols", "30");
            nthComment.setAttribute("rows", "1");
            nthComment.innerHTML = arrayEntry["Comment"];
            // Markierung, ob bereits gekauft oder nicht
            let nthCheckboxBought = document.createElement("input");
            document.querySelector("#entry" + i)?.appendChild(nthCheckboxBought);
            nthCheckboxBought.setAttribute("class", "bought");
            nthCheckboxBought.setAttribute("name", "wasBought");
            nthCheckboxBought.setAttribute("id", "wasBought" + i);
            nthCheckboxBought.type = "checkbox";
            nthCheckboxBought.checked = arrayEntry["Bought"];
            nthEntry.innerHTML += "<br>";
            // Delete-Button
            let nthDeleteButton = document.createElement("button");
            document.querySelector("#entry" + i)?.appendChild(nthDeleteButton);
            nthDeleteButton.setAttribute("class", "deleteEntry");
            nthDeleteButton.setAttribute("id", "deleteEntry" + i);
            // Icon vom Delete-Button
            let nthDeleteIcon = document.createElement("i");
            document.querySelector("#deleteEntry" + i)?.appendChild(nthDeleteIcon);
            nthDeleteIcon.setAttribute("class", "fa-solid fa-trash-can");
            // Anzeige des Datums des letzten Kaufes
            let nthDateLastBought = document.createElement("input");
            document.querySelector("#entry" + i)?.appendChild(nthDateLastBought);
            nthDateLastBought.setAttribute("class", "lastPurchase");
            nthDateLastBought.setAttribute("id", "lastPurchase" + i);
            nthDateLastBought.setAttribute("name", "dateOfLastPurchase");
            nthDateLastBought.setAttribute("readonly", "");
            nthDateLastBought.type = "date";
            nthDateLastBought.value = arrayEntry["LastBought"];
            // aus unbekannten Gruenden ließ sich der .value der Inputelemente nicht veraendern, Umgehung des Problems durch aendern des .values in seperaten Funktionen
            addValueAmount(arrayEntry["Amount"], i);
            addCheckmark(arrayEntry["Bought"], i);
            addDate(arrayEntry["LastBought"], i);
        }
        // Button zum Anlegen neuer Elmente (New-Entry-Button)
        let entryButton = document.createElement("button");
        document.querySelector("#list")?.appendChild(entryButton);
        entryButton.setAttribute("id", "newEntry");
        // Icon für den New-Entry-Button
        let plusIcon = document.createElement("i");
        document.querySelector("#newEntry")?.appendChild(plusIcon);
        plusIcon.setAttribute("class", "fa-solid fa-plus");
        // hinzufuegen der Event-Listener zu den erstellten Elementen
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
        document.getElementById("newEntry")?.addEventListener("click", makeNewEntry);
    }
    // Funktionen zum aendern des .values der Inputelemente (bzw von .checked)
    function addValueAmount(amountEntry, i) {
        let valueAmount = document.getElementById("itemAmount" + i);
        valueAmount.value = amountEntry;
    }
    function addCheckmark(checkEntry, i) {
        let addMark = document.getElementById("wasBought" + i);
        addMark.checked = checkEntry;
    }
    function addDate(dateEntry, i) {
        let addLastDate = document.getElementById("lastPurchase" + i);
        addLastDate.value = dateEntry;
    }
    // reagiert, wenn Mengenanzahl geaendert wird, und verhindert negative Zahlen
    function logAmount() {
        if (this.value < 1) {
            this.value = 1;
        }
        console.log("Anzahl: " + this.value);
    }
    // reagiert, wenn Checkbox angeclickt wird
    function logCheck(_event) {
        console.log("Kauf wurde vollzogen.");
    }
    // reagiert, wenn der Delete-Button geclickt wird
    function logDelete(_event) {
        console.log("Delete?");
    }
    // reagiert, wenn etwas in der Kommentarzeile geaendert wird
    function logComment() {
        console.log("Kommentar: " + this.value);
    }
    // loescht den New-Entry-Button
    function deleteEntryButton() {
        const deleteButton = document.getElementById("newEntry");
        deleteButton?.remove();
    }
    // loescht alle Listenelemente (ausser der Ueberschrift)
    function deleteEverything() {
        const deleteButton = document.getElementById("newEntry");
        deleteButton?.remove();
        console.log("hi");
        for (let i = 0; i < shoppingList.dataList.length; i++) {
            console.log(i);
            const deleteFields = document.getElementById("entry" + i);
            deleteFields?.remove();
        }
        const deleteInputFields = document.getElementById("entryInputBox");
        deleteInputFields?.remove();
    }
    // Funktion zum Erstellen der Inputfelder fuer einen neuen Eintrag
    function makeNewEntry() {
        deleteEntryButton();
        // umliegende Box
        let inputNewEntry = document.createElement("fieldset");
        document.querySelector("#list")?.appendChild(inputNewEntry);
        inputNewEntry.setAttribute("id", "entryInputBox");
        // Nacheinander durchgehen der Kategorien des Datenspeicherarrays und erstellen von Inputfeldern fuer diese
        for (let a in shoppingList.dataList[0]) {
            // nur Erstellen von Inputfeldern fuer die Kategorien, die einen manuellen Input benoetigen
            if (a != "LastBought" && a != "Bought") {
                // Kategoriename
                let newCategory = document.createElement("span");
                document.querySelector("#entryInputBox")?.appendChild(newCategory);
                newCategory.setAttribute("class", "inputFieldName");
                newCategory.innerHTML = a + ":  ";
                // Inputfeld
                let newItemName = document.createElement("input");
                document.querySelector("#entryInputBox")?.appendChild(newItemName);
                newItemName.setAttribute("class", "inputData");
                newItemName.setAttribute("placeholder", typeof a);
                // Kategoriespezifische Veraenderungen
                switch (a) {
                    case "Name":
                        newItemName.setAttribute("placeholder", "String");
                        break;
                    case "Amount":
                        newItemName.type = "number";
                        newItemName.setAttribute("placeholder", "Number");
                        newItemName.setAttribute("min", "1");
                        break;
                    case "Comment":
                        newItemName.setAttribute("placeholder", "String");
                        break;
                    default:
                        break;
                }
                inputNewEntry.innerHTML += "<br>";
            }
        }
        // Confirm-Button + dazugehoeriger event listener
        let endInput = document.createElement("button");
        document.querySelector("#entryInputBox")?.appendChild(endInput);
        endInput.setAttribute("id", "confirmButton");
        endInput.innerHTML = "Confirm";
        document.getElementById("confirmButton")?.addEventListener("click", makeEntry);
    }
    // neuer Eintrag wird angelegt, basierend auf den getaetigten Eingaben
    function makeEntry() {
        let dataNewInput = document.getElementsByClassName("inputData");
        let nameField = dataNewInput[0];
        let amountField = dataNewInput[1];
        let commentField = dataNewInput[2];
        // Sichergehen, dass Name des Eintrags und Mengenanzahl vorliegen
        if (nameField.value != "" && amountField.value != "") {
            // vermeiden negativer Zahlen
            if (amountField.value < 1) {
                amountField.value = 1;
            }
            // anlegen des Arrays, dass an das Datenspeicherungsarray uebergeben wird
            let arrayNewInput = {
                Name: nameField.value,
                Amount: amountField.value,
                Comment: commentField.value,
                Bought: false,
                LastBought: "1111-11-11"
            };
            // uebergeben des neuen Arrays
            shoppingList.dataList.push(arrayNewInput);
            // Listeninhalt wird basierend inklusive neuem Array neu generiert
            generateContent();
        }
        else {
            // Fehlermeldung, wenn eine der beiden Eintragungen nicht vorgenommen wurde
            alert("Please check if you entered the name of your item in the Name field and the amount in the Amount field.");
            return;
        }
    }
})(shoppingList || (shoppingList = {}));
//# sourceMappingURL=ShoppingList.js.map