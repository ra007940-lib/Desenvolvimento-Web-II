const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {

    const fruta = frm.inFruta.value;
    const numero = Number(frm.inNumero.value);

    let resposta = "";

    for (let i = 1; i <= numero; i++) {
        resposta = resposta + fruta;

        if (i < numero) {
            resposta = resposta + " * ";
        }
    }

    resp.innerText = resposta;

    e.preventDefault();
});