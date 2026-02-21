// exercise2.js

const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

// Add tag on Enter
tagInput.addEventListener('keydown', function (event) {
  if (event.key !== 'Enter') return;

  const value = tagInput.value.trim();

  if (!value) return;

  // Create tag
  const tag = document.createElement('div');
  tag.classList.add('tag');

  tag.innerHTML = `
    ${value}
    <span class="tag-remove">&times;</span>
  `;

  // Add to container
  tagContainer.appendChild(tag);

  // Clear input
  tagInput.value = '';
});

// Remove tag (delegation)
tagContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tag-remove')) {
    event.target.closest('.tag').remove();
  }
});