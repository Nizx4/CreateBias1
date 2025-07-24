// bias-library.js: Live search for bias cards by name (case-insensitive, by letters)
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('biasSearch');
  const cards = Array.from(document.querySelectorAll('.bias-card'));

  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
      if (title.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
