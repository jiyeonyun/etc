const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const alldel = document.querySelector('.delall');


  const time =new Date();
  let year = time.getFullYear();
  let month = ('0' + (time.getMonth() + 1)).slice(-2);
  let day = ('0' + time.getDate()).slice(-2);
  let dateString = year + '-' + month  + '-' + day;


function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <span class="time">${dateString}</span>
        <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

alldel.addEventListener('click',()=>{
  const delete_all = document.querySelector('.items');
  while (delete_all.hasChildNodes()) {	// 부모노드가 자식이 있는지 여부를 알아낸다
  delete_all.removeChild(
  delete_all.firstChild
  );
}
});
