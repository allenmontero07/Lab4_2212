// exercise4.js

const editList = document.querySelector('#edit-list');

editList.addEventListener('dblclick', function (event) {
  // Find closest item
  const item = event.target.closest('.edit-item');

  if (!item) return;

  // Prevent double activation
  if (item.classList.contains('editing')) return;

  const originalText = item.textContent;

  // Enter edit mode
  item.textContent = '';

  const input = document.createElement('input');
  input.value = originalText;

  item.appendChild(input);
  item.classList.add('editing');
  input.focus();

  let finished = false;

  // Commit edit
  function commitEdit() {
    if (finished) return;
    finished = true;

    const newText = input.value.trim() || originalText;

    item.textContent = newText;
    item.classList.remove('editing');
  }

  // Cancel edit
  function cancelEdit() {
    if (finished) return;
    finished = true;

    item.textContent = originalText;
    item.classList.remove('editing');
  }

  // Key handling
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      commitEdit();
    }

    if (e.key === 'Escape') {
      cancelEdit();
    }
  });

  // Blur handling
  input.addEventListener('blur', commitEdit);
});