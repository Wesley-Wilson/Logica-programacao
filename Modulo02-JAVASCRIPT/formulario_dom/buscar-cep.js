//https://viacep.com.br/ws/08990020/json


const cep = document.getElementById("cep")

cep.addEventListener("change" , (evento) => {
    let cepUsuario = evento.target
    buscaCEP(cepUsuario.value)

})

function buscaCEP(cepUsuario){
    console.log(cepUsuario);
}

// Requisição da API
// trycat
async function buscaCEP(cepUsuario){
    let erroCep = document.getElementById("erro")
    erroCep.innerHTML = " "

    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`);
        let consultaCEPJson = await consultaCEP.json()
        console.log(consultaCEPJson);

        if (consultaCEPJson.erro){
            throw Error("CEP NÃO ENCONTRADO")
            
        }

        preencheCampos(consultaCEPJson)
    }
    catch {
        erroCep.innerHTML = 'CEP INVÁLIDO, TENTE NOVAMENTE!'
        apagaCampos()
    }
}

// buscar os campos do Json e preencher os inputs
function preencheCampos(cepJson){

    
    console.log(cepJson);
    console.log(cepJson.logradouro);

    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    rua.value = cepJson.logradouro
    bairro.value = cepJson.bairro
    cidade.value = cepJson.localidade
    estado.value = cepJson.uf
}

// função para apagar campos
function apagaCampos(){

    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")
    rua.value = " "
    bairro.value = " "
    cidade.value = " "
    estado.value = " "

}
