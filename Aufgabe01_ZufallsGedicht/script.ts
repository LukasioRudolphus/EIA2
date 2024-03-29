namespace ZufallsGedicht {
    let subjekt: string[] = ["Gunther", "Die fette Katze", "Das Handball-Team", "Der Hausmeister", "Das Paar"];
    let prädikat: string[] = [" beißt ", " jagt ", " baut ", " springt auf ", " trägt "];
    let objekt: string[] = ["die Tastatur.", "den Hund.", "das Schwimmbecken.", "das Dach.", "die Kiste."];

    for (let i = 5; i >= 1; i--) {
        let word: string = getVerse(subjekt, prädikat, objekt);
        console.log(word);
    }

    function getVerse(_sub: string[], _prä: string[], _obj: string[]) {
        let satz: string = "";
        let auswahlsub: number = Math.floor(Math.random() * _sub.length);
        let auswahlprä: number = Math.floor(Math.random() * _prä.length);
        let auswahlobj: number = Math.floor(Math.random() * _obj.length);
        satz = _sub.splice(auswahlsub, 1)[0] + _prä.splice(auswahlprä, 1)[0] + _obj.splice(auswahlobj, 1)[0];
        return satz;
    }


}

