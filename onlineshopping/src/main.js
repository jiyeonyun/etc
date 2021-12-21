const itemsul = document.querySelector('.items');
const tshirts = document.querySelector('.t');
const pants = document.querySelector('.p');
const skirts = document.querySelector('.s');
//fetch the items
function loadItems(){
    return fetch('data/data.json')
    .then(res=>res.json())
    .then(json=>json.items);
}
//main
loadItems()
.then(items=>{
  for(let i = 0 ; i<items.length; i++){
    const li = document.createElement('li');
    li.setAttribute('class',`item ${items[i].type}`);
    const thumnail = document.createElement('img');
    thumnail.setAttribute('class','item__thumbnail');
    thumnail.setAttribute('src',`${items[i].image}`);
    const describtion = document.createElement('p');
    describtion.setAttribute('class','item__description');
    describtion.innerText=`${items[i].color} ${items[i].type}`;
    li.appendChild(thumnail);
    li.appendChild(describtion);
    itemsul.appendChild(li);
  }
})
.catch(console.log('no'))

tshirts.addEventListener('click',()=>{
  const list = document.querySelector('li');
  list.classList.contains(pants).setAttribute('class','item invisible ')
});
pants.addEventListener('click',()=>{

});
skirts.addEventListener('click',()=>{

});