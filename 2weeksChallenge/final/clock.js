const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const todoform = document.getElementById('todo-form');

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    if(){

    }
    else{

    }
}

loginBtn.addEventListener('click',onLoginSubmit);