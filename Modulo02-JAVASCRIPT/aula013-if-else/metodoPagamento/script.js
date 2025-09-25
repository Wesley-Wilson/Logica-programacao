let formaPagamento ="pix"
let valorGasto = 1000
switch (formaPagamento){
    case "pix":
        console.log(valorGasto*0.9);
        break 
    case "debito":
        console.log(valorGasto*0.95);
        break 
    case "credito":
        console.log(valorGasto);
        break     
}

function calcularPagamento(){
    let valorGasto = parseFloat(document.getElementById("valorCompra").value)

    let formaPagamento = document.getElementById("formaPagamento").value

    let resultado = document.querySelector("#resultado")

    switch(formaPagamento) {
        case "pix":
            let valorFinal = valorGasto * 0.9
            resultado.innerHTML = "O valor a ser pago é de " + valorFinal.toFixed(2)
            break
        case "debito":
            valorFinal = valorGasto * 0.95
            resultado.innerHTML = "O valor a ser pago é de " + valorFinal.toFixed(2)
            break
        case "credito":
            resultado.innerHTML = "O valor a ser pago é de " + valorGasto.toFixed(2)
            break
        default:
            resultado.innerHTML = "VALOR INVÁLIDO"
            break
    }
}
