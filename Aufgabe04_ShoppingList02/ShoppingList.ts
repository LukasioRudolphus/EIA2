namespace shoppingList {
    window.addEventListener("load", nowLoad);

    function nowLoad(_event: Event): void {
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
        console.log(dataList);
        document.getElementById("newEntry")?.addEventListener("click", generateContent);
        // document.getElementById("newEntry")?.addEventListener("click", generateContent(dataList[0]));
    }

    function generateContent(_arrayEntry: any): any {
        let arrayEntry = dataList[0];

        let nthEntry: HTMLElement = document.createElement("fieldset");
        document.querySelector("#list")?.appendChild(nthEntry);
        nthEntry.setAttribute("class", "entry");
        nthEntry.setAttribute("id", "entry1");

        let nthItemName: HTMLElement = document.createElement("h2");
        document.querySelector("#entry1")?.appendChild(nthItemName);
        nthItemName.setAttribute("class", "itemName");
        nthItemName.innerHTML = arrayEntry["name"];

        let nthAmount: HTMLInputElement = document.createElement("input");
        nthAmount.setAttribute("class", "amount");
        nthAmount.setAttribute("name", "itemAmount");
        nthAmount.setAttribute("id", "itemAmount1");
        nthAmount.type = "number";
        document.querySelector("#entry1")?.appendChild(nthAmount);

        nthEntry.innerHTML += "<br>";

        let nthComment: HTMLElement = document.createElement("textarea");
        document.querySelector("#entry1")?.appendChild(nthComment);
        nthComment.setAttribute("class", "comment");
        nthComment.setAttribute("id", "comment1");
        nthComment.setAttribute("name", "commentarea");
        nthComment.setAttribute("cols", "30");
        nthComment.setAttribute("rows", "1");
        nthComment.innerHTML = arrayEntry["comment"];

        let nthCheckboxBought = document.createElement("input");
        document.querySelector("#entry1")?.appendChild(nthCheckboxBought);
        nthCheckboxBought.setAttribute("class", "bought");
        nthCheckboxBought.setAttribute("name", "wasBought");
        nthCheckboxBought.setAttribute("id", "wasBought1");
        nthCheckboxBought.type = "checkbox";
        nthCheckboxBought.checked = arrayEntry["wasBought"];
        console.log(nthCheckboxBought.checked);

        nthEntry.innerHTML += "<br>";

        let nthDeleteButton: HTMLElement = document.createElement("button");
        document.querySelector("#entry1")?.appendChild(nthDeleteButton);
        nthDeleteButton.setAttribute("class", "deleteEntry");
        nthDeleteButton.setAttribute("id", "deleteEntry1");

        let nthDeleteIcon = document.createElement("i");
        document.querySelector("#deleteEntry1")?.appendChild(nthDeleteIcon);
        nthDeleteIcon.setAttribute("class", "fa-solid fa-trash-can");
        
        let nthDateLastBought = document.createElement("input");
        document.querySelector("#entry1")?.appendChild(nthDateLastBought);
        nthDateLastBought.setAttribute("class", "lastPurchase");
        nthDateLastBought.setAttribute("id", "lastPurchase1");
        nthDateLastBought.setAttribute("name", "dateOfLastPurchase");
        nthDateLastBought.setAttribute("readonly", "");
        nthDateLastBought.type = "date";
        nthDateLastBought.value = arrayEntry["lastBought"];

        addValueAmount(arrayEntry["amount"]);
        addCheckmark(arrayEntry["wasBought"]);
        addDate(arrayEntry["lastBought"]);
    }

    function addValueAmount(amountEntry: any){
        let valueAmount = document.getElementById("itemAmount1") as HTMLInputElement;
        console.log(valueAmount);
        valueAmount.value = amountEntry;
    }

    function addCheckmark(checkEntry: any){
        let addMark = document.getElementById("wasBought1") as HTMLInputElement;
        console.log(addMark);
        addMark.checked = checkEntry;
    }

    function addDate(dateEntry: any){
        let addLastDate = document.getElementById("lastPurchase1") as HTMLInputElement;
        console.log(addLastDate);
        addLastDate.value = dateEntry;
    }

    function logAmount(this: any): void {
        console.log("Anzahl: " + this.value);
    }

    function logCheck(_event: Event): void {
        console.log("Kauf wurde vollzogen.");
    }

    function logDelete(_event: Event): void {
        console.log("Delete?");
    }

    function logComment(this: any): void {
        console.log("Kommentar: " + this.value);
    }

}