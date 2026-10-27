// Rola suavemente e fecha o menu mobile automaticamente ao clicar em um link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});