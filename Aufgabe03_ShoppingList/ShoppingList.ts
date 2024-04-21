namespace shoppingList {
    window.addEventListener("load", nowLoad);

    function nowLoad(_event: Event): void {
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