  // Funzioni per l'accordion
  function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const headers = document.querySelectorAll('.accordion-header');
    
    // Chiudi tutti gli altri accordion
    contents.forEach((content, i) => {
        if (i !== index) {
            content.classList.remove('active');
            headers[i].setAttribute('aria-expanded', 'false');
        }
    });
    
    // Toggle dell'accordion selezionato
    const isActive = contents[index].classList.contains('active');
    contents[index].classList.toggle('active');
    headers[index].setAttribute('aria-expanded', !isActive);
}

// Funzioni per il modal
function openModal() {
    const modal = document.getElementById('preventivo-modal');
    const firstInput = document.getElementById('nome');
    
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    
    // Focus sul primo input
    setTimeout(() => {
        firstInput.focus();
    }, 100);
    
    // Trap focus nel modal
    trapFocus(modal);
}

function closeModal() {
    const modal = document.getElementById('preventivo-modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    
    // Ritorna il focus al pulsante che ha aperto il modal
    document.querySelector('.cta-button').focus();
}

// Chiudi modal con Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('preventivo-modal');
        if (modal.style.display === 'block') {
            closeModal();
        }
    }
});

// Chiudi modal cliccando fuori
window.onclick = function(event) {
    const modal = document.getElementById('preventivo-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Trap focus nel modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
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

// Gestione accessibilità accordion con tastiera
document.querySelectorAll('.accordion-header').forEach((header, index) => {
    header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccordion(index);
        }
    });
});