const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {

    let chinchilas = Number(frm.inChinchilas.value);
    const anos = Number(frm.inAnos.value);

    let resposta = "";

    for (let i = 1; i <= anos; i++) {

        resposta = resposta + i + "º Ano: " + chinchilas + " Chinchilas\n";

        chinchilas = chinchilas * 3;
    }

    resp.innerText = resposta;

    e.preventDefault();
});