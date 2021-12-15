import React, { useState } from 'react';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import './App.css';
import products from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
function App() {
  
  let [shoes,shoesSet] = useState(products);
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
        <ProductDiv shoes = {shoes} />
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
    <Detail shoes={shoes}/>
    </Route>
    <Route path="/:id">
    </Route>
    </Switch>








    </div>
  );
}

// class Detail2 extends React.Component{
//   componentDidMount(){

//   }
//   componentWillUnmount(){

//   }
// }



function ProductDiv(props){
  return(
    props.shoes.map(function(i,n){
      return(
        <div className='col-md-4'>
          <img src={`https://codingapple1.github.io/shop/shoes${n+1}.jpg`} width="100%"></img>
          <h4>{props.shoes[n].title}</h4>
          <p>{props.shoes[n].price}<br/>{props.shoes[n].content}</p>
        </div>
      )
    })
      
  )
}

export default App;
