// Fecha o navbar ao clicar em qualquer item do menu, exceto nos serviços
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', (event) => {
        // Verifica se o link clicado é um serviço (dropdown)
        if (item.parentElement.classList.contains('dropdown') || item.closest('.dropdown')) {
            // Se for um link de serviços, não fecha
            return;
        }

        const navbarToggle = document.querySelector('.navbar-toggler');
        if (!navbarToggle.classList.contains('collapsed')) {
            // Fecha o navbar se não estiver colapsado
            navbarToggle.click();
        }
    });
});
