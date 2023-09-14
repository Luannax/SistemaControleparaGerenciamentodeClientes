document.addEventListener("DOMContentLoaded", function() {
    var entrarBtn = document.getElementById("entrarBtn");
    var loading = document.getElementById("loading");

    entrarBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Esconde o botão "Entrar" e exibe o elemento de carregamento
        entrarBtn.classList.add("hidden");
        loading.style.display = "block";

        // Simula o carregamento durante 2 segundos (ajuste conforme necessário)
        setTimeout(function() {
            // Redireciona o usuário para a página de destino após o carregamento
            window.location.href = "login/cadastro/cadastro.html";

            // Remove a classe hidden para exibir o botão novamente
            entrarBtn.classList.remove("hidden");
        }, 2000); // 2 segundos de atraso
    });
});
