const inputLine = document.querySelector('#input');
const items = document.querySelector('.items');

inputLine.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    const text = inputLine.value;

    if (text) {
      const newItem = document.createElement('li');
      newItem.textContent = text;
      newItem.addEventListener('click', function() {
        newItem.classList.toggle('done');
      })
      items.append(newItem);
      inputLine.value = '';
    }
  }
});

/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */