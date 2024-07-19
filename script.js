document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const musicasButton = document.getElementById('musicas-button');
if (musicasButton) {
    musicasButton.addEventListener('click', () => {
        window.location.href = 'musicas.html';
    });
}

const conquitasButton = document.getElementById('conquitas-button');
if (conquitasButton) {
    conquitasButton.addEventListener('click', () => {
        window.location.href = 'conquitas.html';
    });
}
