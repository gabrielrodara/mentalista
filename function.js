var numeroSecreto = parseInt(Math.random() * 11)

function gerarNumero() {
    numeroSecreto = parseInt(Math.random() * 11)
}

function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)
    
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou!"
        gerarNumero()
        } else if (chute > 10 || chute <0) {
            elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10"
        } else if (chute > numeroSecreto) {
            elementoResultado.innerHTML = "Errou! O número secreto é menor que o número digitado."
        } else if (chute < numeroSecreto) {
            elementoResultado.innerHTML = "Errou! O número secreto é maior que o número digitado."
        }
        
} 
