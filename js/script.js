var counter = 1;

setInterval(function () {
    document.getElementById('slider' + counter).checked = true;

    counter++;

    if (counter > 4) {
        counter = 1;
    }
}, 500);

function sendconfirm() {

    document.getElementById("sendconfirm").value = "Votre mail a bien été envoyé";
}