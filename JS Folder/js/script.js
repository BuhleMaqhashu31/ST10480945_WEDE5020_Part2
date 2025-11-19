(function() {
    // Contact form
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
            const name = form.name?.value.trim() || '';
            const email = form.email?.value.trim() || '';
            const message = form.message?.value.trim() || '';

            if (!name) { showMessage('Please enter your name.', false); form.name?.focus(); return; }
            if (!email || !isValidEmail(email)) { showMessage('Please enter a valid email address.', false); form.email?.focus(); return; }
            if (!message || message.length < 10) { showMessage('Please enter a message (at least 10 characters).', false); form.message?.focus(); return; }

            showMessage('Thank you — your message has been sent.', true);
            form.reset();
        });
    }

    document.querySelectorAll('main a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => console.log('Opening external link:', link.href));
    });

    // Appointment page
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const bookingForm = document.getElementById('bookingForm');

    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    const toMinutes = hhmm => {
        if (!hhmm) return -1;
        const [h, m] = hhmm.split(':').map(Number);
        return h * 60 + m;
    };

    if (bookingForm && dateInput && timeInput) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            if (!dateInput.value || !timeInput.value) {
                alert('Please select a date and time.');
                return;
            }

            const selectedDate = new Date(dateInput.value);
            const now = new Date();

            if (selectedDate.toDateString() === now.toDateString()) {
                const selectedMinutes = toMinutes(timeInput.value);
                const nowMinutes = now.getHours() * 60 + now.getMinutes();
                if (selectedMinutes <= nowMinutes) {
                    alert('You cannot book a past time today. Please select a future time.');
                    return;
                }
            }

            const formattedDate = selectedDate.toLocaleDateString('en-GB').replace(/\//g, '-');
            alert(`Appointment booked for ${formattedDate} at ${timeInput.value}`);
            bookingForm.reset();
        });
    }

    //Review page
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    function addReviewToPage(name, text) {
        if (!reviewsContainer) return;
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';

        const strong = document.createElement('strong');
        strong.textContent = name || 'Anonymous';

        const p = document.createElement('p');
        p.textContent = text || '';

        reviewDiv.appendChild(strong);
        reviewDiv.appendChild(p);
        reviewsContainer.appendChild(reviewDiv);
    }

    if (reviewsContainer) {
        const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        savedReviews.forEach(r => addReviewToPage(r.name, r.text));
    }

    if (reviewForm && reviewsContainer) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = (reviewForm.querySelector('#name')?.value || '').trim();
            const reviewText = (reviewForm.querySelector('#review')?.value || '').trim();

            if (!name || !reviewText) {
                alert('Please enter your name and a review.');
                return;
            }

            addReviewToPage(name, reviewText);

            const saved = JSON.parse(localStorage.getItem('reviews') || '[]');
            saved.push({ name: name, text: reviewText });
            localStorage.setItem('reviews', JSON.stringify(saved));

            reviewForm.reset();
        });
    }

    // Lightbox / Gallery
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const lightbox = document.getElementById('lightbox');
    const lbImage = lightbox?.querySelector('.lightbox-image');
    const lbClose = lightbox?.querySelector('.lightbox-close');
    const lbPrev = lightbox?.querySelector('.lightbox-prev');
    const lbNext = lightbox?.querySelector('.lightbox-next');
    const lbOverlay = lightbox?.querySelector('.lightbox-overlay');
    let currentIndex = -1;

    function openLightbox(index) {
        if (!lightbox || !lbImage) return;
        currentIndex = index;
        const item = galleryItems[index];
        lbImage.src = item.dataset.large || item.src;
        lbImage.alt = item.alt || '';
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.classList.add('open');
        lbImage.focus?.();
    }

    function closeLightbox() {
        if (!lightbox || !lbImage) return;
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.classList.remove('open');
        lbImage.src = '';
        currentIndex = -1;
    }

    function showPrev() {
        if (currentIndex > 0) openLightbox(currentIndex - 1);
    }
    function showNext() {
        if (currentIndex < galleryItems.length - 1) openLightbox(currentIndex + 1);
    }

    if (galleryItems.length && lightbox) {
        galleryItems.forEach((img, i) => {
            img.addEventListener('click', () => openLightbox(i));
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(i);
            });
            img.setAttribute('tabindex', '0');
        });

        lbClose?.addEventListener('click', closeLightbox);
        lbPrev?.addEventListener('click', showPrev);
        lbNext?.addEventListener('click', showNext);

        lbOverlay?.addEventListener('click', closeLightbox);
        lightbox.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        });
    }

    // Services filter
    const serviceFilter = document.getElementById('serviceFilter');
    const serviceItems = Array.from(document.querySelectorAll('.service-item'));

    function applyServiceFilter(value) {
        serviceItems.forEach(item => {
            const cat = item.dataset.category || '';
            if (value === 'all' || cat === value) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    if (serviceFilter && serviceItems.length) {
        serviceFilter.addEventListener('change', (e) => applyServiceFilter(e.target.value));
        applyServiceFilter(serviceFilter.value);
    }

    // Booking form enhancements
    // Reuse variables declared above (bookingForm, dateInput, timeInput)
    if (bookingForm && dateInput && timeInput) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    }
})();