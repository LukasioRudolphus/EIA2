"use strict";
var scribblecode;
(function (scribblecode) {
    window.addEventListener("load", handleLoad);
    let infoBox;
    function handleLoad(_event) {
        infoBox = document.getElementById("anCursor");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let div = document.getElementsByTagName("div");
        for (let i = 0; i < div.length; i++) {
            div[i].addEventListener("click", logInfo);
            div[i].addEventListener("keyup", logInfo);
        }
    }
    function setInfoBox(_event) {
        let targetMouse = event?.target;
        if (infoBox != null) {
            infoBox.innerHTML = "Mouse Position X: " + _event.pageX + " Mouse Position Y: " + _event.pageY + "<br>Target: " + targetMouse;
            infoBox.style.left = (_event.pageX + 10) + "px";
            infoBox.style.top = (_event.pageY + 10) + "px";
            infoBox.style.padding = "10px";
            infoBox.style.border = "2px solid grey";
        }
    }
    function logInfo(_event) {
        let targetEvent = event?.target;
        let currentTargetEvent = event?.currentTarget;
        let eventType = event?.type;
        console.log(eventType, targetEvent, currentTargetEvent, _event);
    }
})(scribblecode || (scribblecode = {}));
//# sourceMappingURL=events.js.map