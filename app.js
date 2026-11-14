const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const toast = document.querySelector('.toast');
let toastTimer;
document.querySelectorAll('.enquire').forEach(button => button.addEventListener('click', () => {
  const item = button.dataset.item;
  toast.textContent = `“${item}” is a concept preview. Message Bloomy Petals on Instagram for current designs and pricing.`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
}));
