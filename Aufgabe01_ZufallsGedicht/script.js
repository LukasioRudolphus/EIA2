"use strict";
var ZufallsGedicht;
(function (ZufallsGedicht) {
    let subjekt = ["Gunther", "Die fette Katze", "Das Handball-Team", "Der Hausmeister", "Das Paar"];
    let prädikat = [" beißt ", " jagt ", " baut ", " springt auf ", " trägt "];
    let objekt = ["die Tastatur.", "den Hund.", "das Schwimmbecken.", "das Dach.", "die Kiste."];
    for (let i = 5; i >= 1; i--) {
        let word = getVerse(subjekt, prädikat, objekt);
        console.log(word);
    }
    function getVerse(_sub, _prä, _obj) {
        let satz = "";
        let auswahlsub = Math.floor(Math.random() * _sub.length);
        let auswahlprä = Math.floor(Math.random() * _prä.length);
        let auswahlobj = Math.floor(Math.random() * _obj.length);
        satz = _sub.splice(auswahlsub, 1)[0] + _prä.splice(auswahlprä, 1)[0] + _obj.splice(auswahlobj, 1)[0];
        return satz;
    }
})(ZufallsGedicht || (ZufallsGedicht = {}));
//# sourceMappingURL=script.js.map