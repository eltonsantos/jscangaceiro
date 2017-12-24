// app.js é o ponto de entrada da aplicação. Faz a inicialização de todos os objetos necessários para a aplicação.

// Criou a instância do controller
let controller = new NegociacaoController();

// Associa o evento de submissão do formulário à chamada do método "adiciona"
document.querySelector(".form").addEventListener("submit", controller.adiciona.bind(controller));