const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {

    const numero = Number(frm.inNumero.value);

    let soma = 0;
    let divisores = "";

    for (let i = 1; i < numero; i++) {

        if (numero % i == 0) {

            soma = soma + i;
            divisores = divisores + i + ", ";
        }
    }

    resp1.innerText = "Divisores de " + numero + ": " + divisores + "(Soma: " + soma + ")";

    if (soma == numero) {
        resp2.innerText = numero + " É um Número Perfeito";
    } else {
        resp2.innerText = numero + " Não é um Número Perfeito";
    }

    e.preventDefault();
});