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

function createItem(text){
    const itemRow =document.createElement('li');
    itemRow.setAttribute('class','item_row');

    const item =document.createElement('div');
    item.setAttribute('class','item');

    const name =document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerText=text;

    const deletebtn=document.createElement('button');
    deletebtn.setAttribute('class','item_delete');
    deletebtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    deletebtn.addEventListener('click',()=>{
        items.removeChild(itemRow);
    });
    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item_divider');

    item.appendChild(name);
    item.appendChild(deletebtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}
addbtn.addEventListener('click',()=>{
onadd();
});

input.addEventListener('keypress',event=>{
    if(event.key === 'Enter'){
        onadd();
    }
   
});