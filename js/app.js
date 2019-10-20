document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const recordListItem = createRecordListItem(event.target);
  const recordList = document.querySelector('#record-list');
  recordList.appendChild(recordListItem);

  event.target.reset();
}

const createRecordListItem = function (form) {
  const recordListItem = document.createElement('li');
  recordListItem.classList.add('record-list-item');

  const artist = document.createElement('h2');
  artist.textContent = form.artist.value;
  recordListItem.appendChild(artist);

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  recordListItem.appendChild(title);

  // const record_label = document.createElement('h2');
  // record_label.textContent = form.record_label.value;
  // recordListItem.appendChild(record_label);

  const genre = document.createElement('h2');
  genre.textContent = form.genre.value;
  recordListItem.appendChild(genre);

  const stock = document.createElement('h2');
  stock.textContent = form.stock.value;
  recordListItem.appendChild(stock);

  return recordListItem;

}

const handleDeleteAllClick = function (event) {
  const recordList = document.querySelector('#record-list');
  recordList.innerHTML = '';
}
