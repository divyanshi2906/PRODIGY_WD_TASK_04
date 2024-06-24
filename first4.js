// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth scrolling for navigation links
//     const navLinks = document.querySelectorAll('nav ul li a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const targetId = link.getAttribute('href').substring(1);
//             document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
//         });
//     });

//     // Form validation
//     const contactForm = document.getElementById('contact-form');
//     contactForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         if (name && email && message) {
//             alert('Message sent successfully!');
//             contactForm.reset();
//         } else {
//             alert('Please fill out all fields.');
//         }
//     });
// });
