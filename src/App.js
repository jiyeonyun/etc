import React, { useContext, useEffect, useState ,lazy,Suspense} from 'react';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import './App.css';
import products from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
// import Detail from './Detail.js';
import axios from 'axios';
import Cart from './cart.js';
let Detail = lazy(()=> import('./Detail.js'));


let 재고context = React.createContext();


function App() {
  
  let [shoes,shoesSet] = useState(products);
  let [재고,재고변경] = useState([10,11,12]);

  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">jiyeonMarket</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link as={Link} to="/detail/1">detail</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Switch>  
    <Route exact path="/">
    <div className='title'>
      <h1>20% Season off</h1>
      <p>lIf you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is. – Angelina Jolie</p>
      <p>
        <Button variant="primary">view more</Button>
      </p>
    </div>
    <div className='container'>
      
      <div className='row'>
      <재고context.Provider value={재고}>
        <ProductDiv shoes = {shoes} />
        </재고context.Provider>

        <button className="btn btn-primary" onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            shoesSet([...shoes, ...result.data]);
          })
          .catch(()=>{
            console.log('실패');
          })
          ;
        }}>더보기</button>
      </div>
    </div>
    </Route>
    <Route path="/detail/:id">
    <Suspense fallback={<div>로딩중이예요</div>}>
    <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
    </Suspense>
    </Route>
    <Route path="/cart">
      <Cart/>
    </Route>
    </Switch>
    </div>
  );
}
// function App11(){
//   let [count, setCount] = useState(0);
//   let [age, setAge] = useState(20);
//   useEffect(()=>{
//     if(count<3){
//       setAge(age+1);
//     }
//   },[count]);
 
//   return(
//       <div>
//           <div>안녕하십니까 전 {age}</div>
//           <button onClick={()=>{
//             setCount(count+1);
//             }}>누르면한살먹기</button>
//       </div>
//   )
// }
// class Detail2 extends React.Component{
//   componentDidMount(){

//   }
//   componentWillUnmount(){

//   }
// }



function ProductDiv(props){

  let 재고 = useContext(재고context);
  let history = useHistory();
  return(
    props.shoes.map(function(i,n){
      return(
        <div className='col-md-4' onClick={()=>{history.push('/detail/'+n+1)}}>
          <img src={`https://codingapple1.github.io/shop/shoes${n+1}.jpg`} width="100%"></img>
          <h4>{props.shoes[n].title}</h4>
          <p>{props.shoes[n].price}<br/>{props.shoes[n].content}</p>
          {재고[n]}
        </div>
      )
    })
      
  )
}

export default App;
