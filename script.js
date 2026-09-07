// ==========================================
// 1. SELECCIÓN DE ELEMENTOS (DOM)
// ==========================================
const gitHubBtn = document.querySelector('.btn');
const themeBtn = document.querySelector('#theme-btn');
const body = document.body;

// ==========================================
// 2. ESTADO INICIAL Y CARGA DE DATOS
// ==========================================
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// ==========================================
// 3. EVENTOS E INTERACTIVIDAD
// ==========================================

// Alerta informativa antes de redirigir al perfil de GitHub
gitHubBtn.addEventListener('click', () => {
    alert('¡Te vas directo al GitHub de Killo1966!');
});

// Alternancia del Modo Oscuro y sincronización con LocalStorage
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

