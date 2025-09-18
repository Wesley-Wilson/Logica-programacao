// window.document.body.style.backgroundColor = "#fff"

// window.alert("SEJA BEM-VINDO!")

// window.prompt("Login")
// window;prompt("Senha")

let paragrafo1 = document.getElementsByTagName("p")[2]
paragrafo1.innerHTML = "USANDO O TAG NAME"
paragrafo1.style.backgroundColor = "red"

let paragrafo2 = document.getElementById("#paragrafo2")
paragrafo2.innerHTML = "USANDO O ID"
paragrafo2.style.backgroundColor = "green"

let paragrafo3 = document.getElementsByClassName(".paragrafo3")
paragrafo3.innerHTML = "USANDO A CLASSE"
paragrafo3.style.backgroundColor = "blue"

// QUERY SELECTOR
let paragrafo4 = document.querySelector("#paragrafo4")
paragrafo4.innerHTML = "USANDO O QUERY SELECTOR"
paragrafo4.style.backgroundColor = "pink"
// QUERY SELECTOR ALL - TODOS OS ELEMENTOS
let paragrafo5 = document.querySelectorAll("p")[4]
paragrafo5.innerHTML = "USANDO O QUERY SELECTOR ALL"
paragrafo5.style.backgroundColor = "purple"

