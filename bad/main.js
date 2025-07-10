// Funzioni per l'accordion
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const headers = document.querySelectorAll('.accordion-header');
    
    // Chiudi tutti gli altri accordion
    contents.forEach((content, i) => {
        if (i !== index) {
            content.classList.remove('active');
        }
    });
    
    // Toggle dell'accordion selezionato
    contents[index].classList.toggle('active');
}

// Funzioni per il modal
function openModal() {
    document.getElementById('preventivo-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('preventivo-modal').style.display = 'none';
}

// Chiudi modal cliccando fuori
window.onclick = function(event) {
    const modal = document.getElementById('preventivo-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Gestione form
document.getElementById('preventivo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Grazie per la tua richiesta! Ti contatteremo presto.');
    closeModal();
});

// Smooth scrolling per i link di navigazione
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});