// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add a class to the header when scrolled to make it slightly opaque or change background
// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) { // Adjust scroll threshold as needed
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

// You would need to add CSS for .scrolled in style.css if you enable the above
// header.scrolled {
//     background-color: rgba(255, 255, 255, 0.95); /* Slightly transparent white */
//     box-shadow: 0 4px 8px rgba(0,0,0,0.15);
// }