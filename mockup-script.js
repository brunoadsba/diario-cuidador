// Navegação entre telas
const screenButtons = document.querySelectorAll('.nav-screen-btn');
const screens = document.querySelectorAll('.screen');

screenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetScreen = button.getAttribute('data-screen');
        
        // Remove active de todos
        screenButtons.forEach(btn => btn.classList.remove('active'));
        screens.forEach(screen => screen.classList.remove('active'));
        
        // Adiciona active no selecionado
        button.classList.add('active');
        document.getElementById(`screen-${targetScreen}`).classList.add('active');
    });
});

// Simulação de interação nos botões da tela
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Feedback visual
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    });
});

// Simulação de navegação bottom nav
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const screen = item.closest('.screen');
        if (screen) {
            const navItems = screen.querySelectorAll('.nav-item');
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }
    });
});

// Animação suave ao mudar de tela
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const screen = mutation.target;
            if (screen.classList.contains('active')) {
                screen.style.opacity = '0';
                screen.style.transform = 'translateX(20px)';
                setTimeout(() => {
                    screen.style.transition = 'all 0.3s ease';
                    screen.style.opacity = '1';
                    screen.style.transform = 'translateX(0)';
                }, 10);
            }
        }
    });
});

screens.forEach(screen => {
    observer.observe(screen, { attributes: true });
});

// Inicializar primeira tela
if (screens.length > 0) {
    screens[0].style.opacity = '1';
    screens[0].style.transform = 'translateX(0)';
}

