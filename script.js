const topbar = document.getElementById('topbar');

if (topbar) {
  const updateTopbar = () => {
    topbar.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateTopbar();
  window.addEventListener('scroll', updateTopbar, { passive: true });
}

document.querySelectorAll('.faq-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    if (!item) return;
    item.classList.toggle('open');
  });
});
