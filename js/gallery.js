const block = document.getElementById('gallery__list');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    block.classList.toggle('expanded');
    button.textContent = block.classList.contains('expanded') ? 'Свернуть' : 'Показать все';
});