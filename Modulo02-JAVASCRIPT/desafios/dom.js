
// evento
document.querySelector("#button").addEventListener("click", () => {
    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let total = (nota1 + nota2) / 2;

    document.querySelector("#resultado").innerHTML = total;
});