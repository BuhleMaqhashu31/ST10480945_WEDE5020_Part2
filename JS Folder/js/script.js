(function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    function showMessage(text, ok = true) {
        if (!feedback) return;
        feedback.textContent = text;
        feedback.style.color = ok ? 'green' : 'crimson';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name) {
                showMessage('Please enter your name.', false);
                form.name.focus();
                return;
            }
            if (!email || !isValidEmail(email)) {
                showMessage('Please enter a valid email address.', false);
                form.email.focus();
                return;
            }
            if (!message || message.length < 10) {
                showMessage('Please enter a message (at least 10 characters).', false);
                form.message.focus();
                return;
            }

            showMessage('Thank you — your message has been sent.', true);
            form.reset();
        });
    }

    document.querySelectorAll('main a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Opening external link:', this.href);
        });
    });
})();