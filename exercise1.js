// exercise1.js

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (event) {
  // Find closest trigger
  const trigger = event.target.closest('.accordion-trigger');

  // If not clicking a trigger, exit
  if (!trigger) return;

  // Find parent accordion item
  const item = trigger.closest('.accordion-item');

  // Get all items
  const items = document.querySelectorAll('.accordion-item');

  // Close all items first
  items.forEach(i => {
    if (i !== item) {
      i.classList.remove('open');
    }
  });

  // Toggle clicked item
  item.classList.toggle('open');
});