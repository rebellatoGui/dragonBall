const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        botoes.forEach(botao => botao.classList.remove("selecionado"));
        botao.classList.add("selecionado");

        personagens.forEach(personagem => personagem.classList.remove("selecionado"));
        personagens[indice].classList.add("selecionado");
    });
});
