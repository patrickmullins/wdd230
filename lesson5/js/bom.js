const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = '❌';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  getStoredList();
});

function getStoredList() {
  try{
  let chapters = localStorage.getItem('bomchaps');
  if (chapters.length > 0) {
    count.textContent = chpaters.length 
    renderList(chapters);
  } else {
    count.textContent = 0;
  }
}
catch (er) {
  count.textContent = 0;
}
}