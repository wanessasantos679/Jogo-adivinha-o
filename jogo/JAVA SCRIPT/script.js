// Gerar número aleatório entre 1 e 10
const numeroCorreto = Math.floor(Math.random() * 10) + 1;

// Selecionar os elementos da página
const input = document.getElementById('userGuess');
const button = document.getElementById('submitGuess');
const message = document.getElementById('message');

// Função para verificar o palpite do usuário
function verificarPalpite() {
    const palpite = parseInt(input.value);

    // Verificar se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        message.textContent = "Por favor, insira um número entre 1 e 10!";
        return;
    }

    // Verificar se o palpite está correto
    if (palpite === numeroCorreto) {
        message.textContent = "Parabéns! Você acertou!";
        message.style.color = "green";
    } else if (palpite < numeroCorreto) {
        message.textContent = "O número é maior. Tente novamente!";
        message.style.color = "orange";
    } else {
        message.textContent = "O número é menor. Tente novamente!";
        message.style.color = "orange";
    }

    // Limpar o campo de input
    input.value = '';
    input.focus();
}

// Adicionar evento de clique ao botão
button.addEventListener('click', verificarPalpite);

// Permitir que o usuário pressione Enter para tentar
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarPalpite();
    }
});
