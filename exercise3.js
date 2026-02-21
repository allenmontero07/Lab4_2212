// exercise3.js

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function (event) {
  // Guard
  if (!event.target.matches('.filter-btn')) return;

  // Update active button
  filterBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Get filter value
  const filter = event.target.dataset.filter;

  // Filter cards
  cards.forEach(card => {
    if (filter === 'all') {
      card.classList.remove('hidden');
    } else {
      const shouldHide = card.dataset.category !== filter;
      card.classList.toggle('hidden', shouldHide);
    }
  });
});