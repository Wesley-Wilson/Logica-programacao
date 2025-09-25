// let n1 = 10
// let n2 = 10

// let media = (n1 + n2) / 2

// if (media >= 7) {
//     console.log("APROVADO");
// }
// else if(media >= 5) {
//     console.log("RECUPERAÇÃO");
// }
// else {
//     console.log("REPROVADO");
// }

function calcularMedia(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let resultado = document.querySelector("#resultado")
    let media = (nota1 + nota2 + nota3) / 3

    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        resultado.innerHTML = "DIGITE NOTAS MENORES QUE 10"
        resultado.style.color = "red"
    } else if(nota1 < 0 || nota2 < 0 || nota3 < 0) {
        resultado.innerHTML = "DIGITE NOTAS MAIORES QUE 0"
        resultado.style.color = "red"
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.innerHTML = "PREENCHA TODOS OS CAMPOS"
        resultado.style.color = "red"
    } else if (media >= 7) {
        resultado.innerHTML = "Aprovado"
        resultado.style.color = "#00CD00"
    } else if (media >= 5) {
        resultado.innerHTML = "Recuperação"
        resultado.style.color = "#FF4500"
    } else {
        resultado.innerHTML = "Reprovado"
        resultado.style.color = "#FF0000"
    }
}

