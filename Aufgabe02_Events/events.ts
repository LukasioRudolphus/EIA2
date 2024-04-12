namespace scribblecode {

    window.addEventListener("load", handleLoad);
    let infoBox: HTMLElement | null;

    function handleLoad(_event: Event): void {
        infoBox = document.getElementById("anCursor");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let div: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("div");
        for (let i = 0; i < div.length; i++) {
            div[i].addEventListener("click", logInfo);
            div[i].addEventListener("keyup", logInfo);
        }
    }

    function setInfoBox(_event: MouseEvent): void {
        let targetMouse = event?.target;
        if (infoBox != null) {
            infoBox.innerHTML = "Mouse Position X: " + _event.pageX + " Mouse Position Y: " + _event.pageY + "<br>Target: " + targetMouse;
            infoBox.style.left = (_event.pageX + 10) + "px";
            infoBox.style.top = (_event.pageY + 10) + "px";
            infoBox.style.padding = "10px";
            infoBox.style.border = "2px solid grey";
        }

    }

    function logInfo(_event: Event): void {
        let targetEvent: any = event?.target;
        let currentTargetEvent: any = event?.currentTarget;
        let eventType: any = event?.type;
        console.log(eventType, targetEvent, currentTargetEvent, _event);
    }

}

