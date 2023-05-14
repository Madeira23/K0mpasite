const icons = document.querySelectorAll('.social-icons a');
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const url = icon.getAttribute('href');
    window.open(url, '_blank');
  });
});