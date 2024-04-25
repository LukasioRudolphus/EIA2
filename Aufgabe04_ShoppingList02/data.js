"use strict";
var shoppingList;
(function (shoppingList) {
    shoppingList.dataList = [
        { name: "Zucchini",
            amount: "4",
            comment: "keine kleinen, nur richtig fette Dinger",
            wasBought: "true",
            lastBought: "11.12.2024" },
        { name: "Cheese",
            amount: "9",
            comment: "Fondue",
            wasBought: "false",
            lastBought: "08.08.2008" },
        { name: "Mineralwasser",
            amount: "3",
            comment: "1.5l Flaschen",
            wasBought: "true",
            lastBought: "24.07.2023" }
    ];
})(shoppingList || (shoppingList = {}));
//# sourceMappingURL=data.js.map