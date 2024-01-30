const imgBox = document.querySelector(".imgBox");
const QRimg = document.querySelector("#QRimg");
const QRtext = document.querySelector("#QRtext");
const btn = document.querySelector("button");

function generateQR() {
    if (QRtext.value.length > 0) {
        QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRtext.value}`;
        imgBox.classList.add("show-img");
    } else {
        QRtext.classList.add("error");
        setTimeout(() => {
            QRtext.classList.remove("error");
        }, 1000);
    }
}

btn.addEventListener("click", () => {
    generateQR();
});
