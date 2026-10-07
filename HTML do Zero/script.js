const botao = document.getElementById("comecar");
const inicio = document.getElementById("inicio");

const historia = document.getElementById("historia");
const continuar = document.getElementById("continuar");

const momentos = document.getElementById("momentos");

const continuarMensagem = document.getElementById("continuar-mensagem");

const mensagem = document.getElementById("mensagem");
const textoMensagem = document.getElementById("texto-mensagem");

const texto = "Eu quero que você saiba o quanto é especial para mim. Algumas coisas são difíceis de colocar em palavras, mas espero que cada detalhe desse pequeno site consiga mostrar um pouco do que sinto por você. ❤️";

const continuarMusica = document.getElementById("continuar-musica");
const musica = document.getElementById("musica");

const continuarfinal = document.getElementById("continuar-final");
const final = document.getElementById("final");

function trocarTela(atual, proxima) {

    atual.classList.add("transicao-saida");

    setTimeout(function () {

        atual.style.display = "none";
        atual.classList.remove("transicao-saida");

        proxima.style.display = "block";
        proxima.classList.add("transicao-entrada");

        setTimeout(function () {
            proxima.classList.remove("transicao-entrada");
        }, 1500);

    }, 1000);
}

botao.addEventListener("click", function () {
    trocarTela(inicio, historia);
});

continuar.addEventListener("click", function () {
    trocarTela(historia, momentos);

    const fotos = document.querySelectorAll("#momentos .foto");

    fotos.forEach(function (foto, indice) {
        setTimeout(function () {
            foto.classList.add("animar-foto");
        }, indice * 250);
    });
});

continuarMensagem.addEventListener("click", function () {

    momentos.style.display = "none";

    mensagem.style.display = "block";
    mensagem.classList.add("transicao-entrada");

    escreverMensagem();

});
continuarMusica.addEventListener("click", function (){
    mensagem.style.display = "none";
    musica.style.display = "block";
    musica.classList.add("transaicao-entrada");
});
const audio = document.querySelector("musica audio");

continuarfinal.addEventListener("click", function(){
    musica.style.display = "none";

    final.style.display = "block";
    final.classList.add("transicao-entrada");

    setTimeout(function(){
        final.classList.remove("transicao-entrada");
    }, 1500);
});

function escreverMensagem() {
    let i = 0;
    textoMensagem.textContent = "";

    continuarMusica.classList.remove("mostrar");

    function escrever() {
        if (i < texto.length) {
            textoMensagem.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, 50);
        } else {
            continuarMusica.classList.add("mostrar");
        }
    }

    escrever();
}
function criarCoracao() {
    const coracoes = document.getElementById("coracoes");

    const coracao = document.createElement("span");

    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";

    // Posição horizontal aleatória
    coracao.style.left = Math.random() * 100 + "%";

    // Tamanhos diferentes
    coracao.style.fontSize = (15 + Math.random() * 25) + "px";

    // Velocidades diferentes
    coracao.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    // Pequena variação na transparência
    coracao.style.opacity =
        (0.4 + Math.random() * 0.6);

    coracoes.appendChild(coracao);

    // Remove depois que terminar
    setTimeout(function () {
        coracao.remove();
    }, 8000);
}

let intervaloCoracoes;

function iniciarCoracoes() {
    let velocidade = 1800;

    intervaloCoracoes = setInterval(function () {
        criarCoracao();

        // Vai aumentando a quantidade de corações
        if (velocidade > 500) {
            velocidade -= 100;

            clearInterval(intervaloCoracoes);

            intervaloCoracoes = setInterval(function () {
                criarCoracao();
            }, velocidade);
        }

    }, velocidade);
}
iniciarCoracoes();
function criarCoracaoInicio() {
    const area = document.getElementById("coracoes-inicio");

    const coracao = document.createElement("span");

    coracao.classList.add("coracao-inicio");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "%";

    coracao.style.fontSize =
        (12 + Math.random() * 18) + "px";

    coracao.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    area.appendChild(coracao);

    setTimeout(function () {
        coracao.remove();
    }, 10000);
}

setInterval(criarCoracaoInicio, 1200);