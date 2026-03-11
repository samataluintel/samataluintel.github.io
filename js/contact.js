// Contact form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            formMessage.innerHTML = '<p style="color: green; font-weight: bold;">Thank you for your message! We will be in touch soon.</p>';
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        } else {
            formMessage.innerHTML = '<p style="color: red;">Please fill in all required fields.</p>';
        }
    });
}
