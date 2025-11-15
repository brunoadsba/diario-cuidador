// Navegação por slides
const slides = document.querySelectorAll('.slide');
const navLinks = document.querySelectorAll('.nav-link');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');

let currentSlide = 0;

// Atualizar total de slides
totalSlidesEl.textContent = slides.length;

// Função para ir para slide específico
function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    
    currentSlide = index;
    slides[currentSlide].scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateNavigation();
}

// Atualizar navegação
function updateNavigation() {
    // Atualizar botões
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
    
    // Atualizar contador
    currentSlideEl.textContent = currentSlide + 1;
    
    // Atualizar links ativos
    navLinks.forEach((link, index) => {
        link.classList.toggle('active', index === currentSlide);
    });
    
    // Fechar sidebar no mobile após clicar
    if (window.innerWidth <= 1024) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
    }
}

// Event listeners para botões
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
    }
});

// Event listeners para links de navegação
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(index);
    });
});

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1);
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
    }
});

// Scroll observer para atualizar slide atual
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(slides).indexOf(entry.target);
            currentSlide = index;
            updateNavigation();
        }
    });
}, observerOptions);

slides.forEach(slide => observer.observe(slide));

// Menu toggle mobile
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar sidebar ao clicar fora (mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// Inicializar navegação
updateNavigation();

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#sidebar') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

