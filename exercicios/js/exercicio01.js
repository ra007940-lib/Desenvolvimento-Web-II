const frm = document.querySelector("form")
const resp= document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const medic = frm.inMedic.value
    const preco = Number(frm.inPreco.value)
    const promocao = (preco*2) *0.90

    resp.innerText = `Promoção de ${medic}\n\n Leve 2 e pague R$${promocao.toFixed(2)}`
     e.preventDefault()
})