const items =document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addbtn = document.querySelector('.footer_button');

function onadd(){
    //1.사용자가 입력한 텍스트를 받아온다.
    const text= input.value;
    if(text === ''){
        input.focus();
        return;
    }
    //2.새로운 아이템을만듬
    const item =createItem(text);
    // //3. 아이템컨테이너에 새로만든아이템을 추가한다
    items.appendChild(item);
    //4.새로 추가된 아이템으로 이동(스크롤링)
    item.scrollIntoView({block:'center'});

    // //5.인풋을 초기화한다
    input.value= '';
    input.focus();
}
let id = 0; //UUID 
function createItem(text){
    const itemRow =document.createElement('li');
    itemRow.setAttribute('class','item_row');
    itemRow.setAttribute('data-id',id);
    itemRow.innerHTML = ` 
    <div class="item">
        <span class="item_name">${text}</span>
        <button class="item_delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    <div class="divider"></div>
    `;

    id++;
    
    return itemRow;
}
addbtn.addEventListener('click',()=>{
onadd();
});

input.addEventListener('keypress', event=>{
    if(event.key === 'Enter'){
        onadd();
    }
});
items.addEventListener('click', event =>{
    const id = event.target.dataset.id;
    if(id){
        const toBeDelete =document.querySelector(`.item_row[data-id="${id}"]`);
        toBeDelete.remove();
    }
});