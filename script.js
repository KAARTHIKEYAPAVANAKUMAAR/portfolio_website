// Form placeholder logic
// function submitForm(event) {
//   event.preventDefault();
//   alert("Thank you for your message! (Form backend not connected yet)");
// }

// Scroll Spy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("reveal-hidden");
  observer.observe(section);
});
