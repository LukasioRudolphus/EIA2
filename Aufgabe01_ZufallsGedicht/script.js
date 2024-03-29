"use strict";
var ZufallsGedicht;
(function (ZufallsGedicht) {
    let subjekt = ["Gunther", "Die fette alte Katze", "Das Handball Team", "Der Laptop", "Das Paar"];
    let prädikat = [" beißt ", " jagt ", " springt ", " baut ", " trägt "];
    let objekt = ["die Katze.", "den Hund.", "ins Schwimmbecken.", "den Code.", "die Kiste."];
    // console.log(subjekt, prädikat, objekt);
    for (let i = 5; i >= 1; i--) {
        // console.log(i);
        let word = getVerse(subjekt, prädikat, objekt);
        console.log(word);
    }
    function getVerse(_sub, _prä, _obj) {
        // let zufallsWert: number = (Math.floor(Math.random()*5));
        let satz = _sub[Math.floor(Math.random() * 5)] + _prä[Math.floor(Math.random() * 5)] + _obj[Math.floor(Math.random() * 5)];
        return satz;
    }
})(ZufallsGedicht || (ZufallsGedicht = {}));
//# sourceMappingURL=script.js.map