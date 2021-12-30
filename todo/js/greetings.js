const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');
const logoutBtn = document.querySelector('#log-out');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const todoform = document.getElementById('todo-form');

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    if(username){
        localStorage.setItem(USERNAME_KEY,username);
        paintGreetings(username);
        todoform.classList.remove(HIDDEN_CLASSNAME);
    }
    else if(username === ''){
        alert("Please type your name");
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    }
}

function paintGreetings(username){
    greeting.innerText =`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}
else{
    todoform.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername)
}

function logOut(){
    const li = document.querySelectorAll('.list');
    for(let i = 0 ; i <li.length ; i++){
        const list = document.querySelector('.list');
        list.remove();
    }
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    todoform.classList.add(HIDDEN_CLASSNAME);
    localStorage.clear()
}

logoutBtn.addEventListener('click',logOut);