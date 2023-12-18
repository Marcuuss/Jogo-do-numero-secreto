// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto!";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 10"; 

let listaDeNumerosSorteados = []
let numeroMaximo = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto)


function exibirTextoNaTela(texto, tag) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela("Jogo do número secreto", "h1");
exibirTextoNaTela("Escolha um número de 1 a 100", "p");
}

exibirMensagemInicial()

function vamoVeChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
    exibirTextoNaTela(`Parabens vc acertou`, `h1`); 
    let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
    let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela( mensagemTentativas , `p`);
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela(`O numero é menor`, `p`);
        exibirTextoNaTela(`Vai lá vc consegue`, `h1`);
        } else {
            exibirTextoNaTela(`O numero é maior`, `p`);
             exibirTextoNaTela(`eu confio!!!`, `h1`)

        }
        tentativas++;
        limparCampo ();
    } 
}   
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados,length;

    if (quantidadeDeElementosNaLista == numeroEscolhido) {
        listaDeNumerosSorteados = []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById(`reiniciar`).setAttribute("disabled" ,true)
}
