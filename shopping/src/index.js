import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { combineReducers } from 'redux';


let 초기값 = [
{id: 0 , name : 'shose11' , quan : 2},
{id: 1 , name : 'shose11' , quan : 23},
{id: 2 , name : 'nike1' , quan : 4},
{id: 3 , name : 'adidas1' , quan : 11},
{id: 4 , name : 'nb324' , quan : 5},
{id: 5 , name : 'helloshose' , quan : 6}
];

let alert닫기 = true;

function reducer2(state = alert닫기 , action){

  if(action.type === '닫기'){
    state = false;
    return state;
  }
  else{
    return state;
  }
}

function reducer(state = 초기값 , 액션){
  if(액션.type === '수량증가'){
    let copy = [...state];
    copy[액션.payload].quan++;
    return copy
  }
  else if(액션.type === '수량감소'){
    let copy1 = [...state];
    
    if(copy1[액션.payload].quan >0){
      copy1[액션.payload].quan--;
    }
    return copy1
  }
  else if(액션.type === '항목추가'){
    let found = state.findIndex((a)=>{return a.id === 액션.payload.id});
    if(found >= 0){
      let copy = [...state];
      copy[found].quan++;
      return copy;
    }
    else{
      let copy = [...state];
      copy.push(액션.payload);
      return copy
    }
  }
  else{
    return state
  }
  }
  

let store = createStore(combineReducers({reducer,reducer2}));




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
