const sections = document.querySelectorAll("section");

function handleScroll() {

  sections.forEach(function (section) {

    const rect = section.getBoundingClientRect();

    const windowHeight = window.innerHeight;

  
    if (rect.top < windowHeight * 0.8) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll();
