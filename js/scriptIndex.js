document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão/link principal que aciona a navegação
    const ctaButton = document.querySelector('.cta-button');
    const loadingOverlay = document.getElementById('loading-overlay');

    if (ctaButton && loadingOverlay) {
        ctaButton.addEventListener('click', (event) => {
            // Previne a navegação padrão
            event.preventDefault();

            // Obtém o URL de destino do link clicado
            const targetUrl = ctaButton.href;

            // Mostra o overlay de carregamento
            loadingOverlay.classList.add('visible');

            // Espera um pouco (simulando carregamento) e então navega
            // Ajuste o tempo conforme necessário
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1500); // Tempo em milissegundos (1500ms = 1.5 segundos)
        });
    } else {
        console.error("Botão CTA ou overlay de carregamento não encontrado.");
    }
});
