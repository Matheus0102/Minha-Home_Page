// Animações ao rolar a página
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
          section.classList.add("show");
        }
      });
    });

// 

/* Menu hamburguer */
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');   
    hamburger.classList.toggle('active');
  });

  // Fechar menu ao clicar em algum link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if(navUl.classList.contains('active')){
        navUl.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
});
