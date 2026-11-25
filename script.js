const toast = document.getElementById('toast');
let hideTimer;
document.querySelectorAll('a.download').forEach(link => {
  link.addEventListener('click', () => {
    toast.textContent = 'Запрошено скачивание. Проверьте загрузки браузера.';
    toast.classList.add('visible');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('visible'), 4500);
  });
});
