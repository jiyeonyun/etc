import React, { useContext, useEffect, useState ,lazy,Suspense ,memo} from 'react';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props){
  let state = useSelector((state)=>state)
  let dispatch = useDispatch();
  return (
    <div>
      <Parent 이름="존박1" 나이="20"/>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>증가</th>
          <th>감소</th>
        </tr>
        {
        state.reducer.map((a,i)=>{
            return (
              <tr key ={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td><button onClick={()=>{dispatch({type: '수량증가' , payload :a.id})}}> + </button></td>
              <td><button onClick={()=>{dispatch({type: '수량감소' ,payload :a.id})}}> - </button></td>
            </tr>
            )
        })
        }
        
      </Table>
      { state.alert열렸니 === true
      ?
            <div class="my-alert2">
              <p>지금 구매하시면 신규 할인 20%</p>
              <button onClick={()=>{dispatch({type:'닫기'})}}>닫기</button>
            </div>
            : null
      }
          </div>
          
        );
      }
      function Parent(props){
        return (
          <div>
            <Child1 이름={props.이름} />
            <Child2 나이={props.나이} />
          </div>
        )
      }
      
      function Child1(){
        useEffect( ()=>{ console.log('렌더링됨1') } );
        return <div>1111</div>
      }
      let Child2 = memo(function(){
        useEffect( ()=>{ console.log('렌더링됨2') } );
        return <div>2222</div>
      });
    
// function state를props화(state){
//     return {
//         state : state.reducer,
//         alert열렸니 :state.reducer2
//     }
//   }
  
//   export default connect(state를props화)(Cart);
export default Cart;