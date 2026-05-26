const topbar = document.getElementById('topbar');

if (topbar) {
  const syncTopbar = () => {
    topbar.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  syncTopbar();
  window.addEventListener('scroll', syncTopbar, { passive: true });
}

document.querySelectorAll('.faq-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    if (!item) return;
    item.classList.toggle('is-open');
  });
});
