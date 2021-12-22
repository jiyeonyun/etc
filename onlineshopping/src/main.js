const itemsul = document.querySelector('.items');
const tshirts = document.querySelector('.t');
const pants = document.querySelector('.p');
const skirts = document.querySelector('.s');
const logo = document.querySelector('.logo');
const blue = document.querySelector('.blues');
const yellow = document.querySelector('.yellows');
const pink = document.querySelector('.pinks');
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
    li.setAttribute('class',`item ${items[i].type} ${items[i].color}`);
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
  logo.addEventListener('click',()=>{
    const removethisgmain = document.querySelectorAll('.tshirt');
    for(let i = 0; i < removethisgmain.length; i++){
      removethisgmain[i].classList.remove('invisible');
      }
    const removethisg = document.querySelectorAll('.pants');
    for(let i = 0; i < removethisg.length; i++){
      removethisg[i].classList.remove('invisible');
    }
    const removethisg2 = document.querySelectorAll('.skirt');
    for(let i = 0; i < removethisg2.length; i++){
      removethisg2[i].classList.remove('invisible');
    }
  });
  tshirts.addEventListener('click',()=>{
  const removethisgmain = document.querySelectorAll('.tshirt');
  for(let i = 0; i < removethisgmain.length; i++){
    removethisgmain[i].classList.remove('invisible');
    }
  const removethisg = document.querySelectorAll('.pants');
  for(let i = 0; i < removethisg.length; i++){
    removethisg[i].classList.add('invisible');
  }
  const removethisg2 = document.querySelectorAll('.skirt');
  for(let i = 0; i < removethisg2.length; i++){
    removethisg2[i].classList.add('invisible');
  }
  });
  pants.addEventListener('click',()=>{
    const removethisgmain = document.querySelectorAll('.pants');
    for(let i = 0; i < removethisgmain.length; i++){
      removethisgmain[i].classList.remove('invisible');
      }
    const removethisg = document.querySelectorAll('.tshirt');
    for(let i = 0; i < removethisg.length; i++){
      removethisg[i].classList.add('invisible');
    }
    const removethisg2 = document.querySelectorAll('.skirt');
    for(let i = 0; i < removethisg2.length; i++){
      removethisg2[i].classList.add('invisible');
    }
  });
  skirts.addEventListener('click',()=>{
    const removethisgmain = document.querySelectorAll('.skirt');
    for(let i = 0; i < removethisgmain.length; i++){
      removethisgmain[i].classList.remove('invisible');
      }
    const removethisg = document.querySelectorAll('.tshirt');
    for(let i = 0; i < removethisg.length; i++){
      removethisg[i].classList.add('invisible');
    }
    const removethisg2 = document.querySelectorAll('.pants');
    for(let i = 0; i < removethisg2.length; i++){
      removethisg2[i].classList.add('invisible');
    }
  });
  blue.addEventListener('click',()=>{
    const removethisgmain = document.querySelectorAll('.blue');
    for(let i = 0; i < removethisgmain.length; i++){
      removethisgmain[i].classList.remove('invisible');
      }
    const removethisg = document.querySelectorAll('.yellow');
    for(let i = 0; i < removethisg.length; i++){
      removethisg[i].classList.add('invisible');
    }
    const removethisg2 = document.querySelectorAll('.pink');
    for(let i = 0; i < removethisg2.length; i++){
      removethisg2[i].classList.add('invisible');
    }
  });
  yellow.addEventListener('click',()=>{
    const removethisgmain = document.querySelectorAll('.yellow');
    for(let i = 0; i < removethisgmain.length; i++){
      removethisgmain[i].classList.remove('invisible');
      }
    const removethisg = document.querySelectorAll('.pink');
    for(let i = 0; i < removethisg.length; i++){
      removethisg[i].classList.add('invisible');
    }
    const removethisg2 = document.querySelectorAll('.blue');
    for(let i = 0; i < removethisg2.length; i++){
      removethisg2[i].classList.add('invisible');
    }
  });
  pink.addEventListener('click',()=>{
    const removethisgmain = document.querySelectorAll('.pink');
    for(let i = 0; i < removethisgmain.length; i++){
      removethisgmain[i].classList.remove('invisible');
      }
    const removethisg = document.querySelectorAll('.yellow');
    for(let i = 0; i < removethisg.length; i++){
      removethisg[i].classList.add('invisible');
    }
    const removethisg2 = document.querySelectorAll('.blue');
    for(let i = 0; i < removethisg2.length; i++){
      removethisg2[i].classList.add('invisible');
    }
  });
})
.catch(console.log('no'))

