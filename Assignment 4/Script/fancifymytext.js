let fancyRadioButton = document.getElementById('FancyShmancy');
let boringRadioButton = document.getElementById('BoringBetty');
let textArea = document.getElementById("textarea");

function incrementFontSize() {
    textArea.style.fontSize = "24pt";
}

function fancify() {
    if (fancyRadioButton.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        boringRadioButton.checked = false;
    } 
}

function borify() {
    if (boringRadioButton.checked) {
        textArea.style.fontWeight= "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        fancyRadioButton.checked = false;
    }
}

function setUpperCase() {
    textArea.style.textTransform = "uppercase";
    let parts = textArea.value.split(".");
    textArea.value = parts.join("-Moo");
}