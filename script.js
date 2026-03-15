(function() {
  var wedding = new Date('2026-07-25T17:00:00');
  function updateCountdown() {
    var now = new Date();
    if (now >= wedding) {
      document.getElementById('days').textContent = '0';
      document.getElementById('hours').textContent = '0';
      document.getElementById('mins').textContent = '0';
      document.getElementById('secs').textContent = '0';
      return;
    }
    var d = wedding - now;
    document.getElementById('days').textContent = Math.floor(d / 86400000);
    document.getElementById('hours').textContent = String(Math.floor((d % 86400000) / 3600000)).padStart(2, '0');
    document.getElementById('mins').textContent = String(Math.floor((d % 3600000) / 60000)).padStart(2, '0');
    document.getElementById('secs').textContent = String(Math.floor((d % 60000) / 1000)).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо! Ваш ответ записан. (Для сбора ответов подключите бэкенд или форму, например Google Forms.)');
});

(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-scroll]').forEach(function(el) { observer.observe(el); });
})();
