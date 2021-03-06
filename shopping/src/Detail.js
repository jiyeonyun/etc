import React, { useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';

let 박스 = styled.div`
padding :20px;
`;
let 제목 = styled.h4 `
font-size : 25px;
color : ${props =>props.색상}`;


function Detail(props){
    let [alert,alertSet] = useState(true);
    let history =useHistory();
    let{ id } = useParams();
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
    });
    let [tab,tabSet] = useState(0);
    let [스위치,스위치변경]=useState(false);

    useEffect(()=>{
      var arr = localStorage.getItem('watched');
      if(arr == null){arr = []}
      else{ arr = JSON.parse(arr);}

      arr.push(id);
      arr = new Set(arr);
      arr = [...arr];

      localStorage.setItem('watched',JSON.stringify(arr));
      // idArray.push(찾은상품.id);
      // const set = new Set(idArray);
      // const newArray = [...set];
      // localStorage.setItem('watched',JSON.stringify(newArray));
    });
    useEffect(()=>{
      let 타이머 = setTimeout(()=>{
      alertSet(false)
      },2000);
      // return function 사라질때(){
      return ()=>{clearTimeout(타이머)}
      // }
    },[]);
    return(
      <div className="container">
        <박스>
        <제목 className='red'>Detail</제목>
        </박스>
        
        {
        alert === true ? 
          (<div className='my-alert2'>
          <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
          : null
          }
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <Info 재고={props.재고}></Info>
          <button className="btn btn-danger" onClick={()=>{
            props.재고변경([9,10,11]);
            props.dispatch({type:'항목추가', payload :{id:찾은상품.id,name:찾은상품.title,quan:1}});
            history.push('/cart')
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
          <div className='wrapRecent'>
          <h5>최근 본 상품</h5>
          <RecentWatch/>
          </div>
        </div>
      </div>
      
      <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
  <Nav.Item>
    <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false);tabSet(0)}}>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false);tabSet(1)}}>Option 2</Nav.Link>
  </Nav.Item>
</Nav>
  <CSSTransition in={스위치} classNames="wow" timeout={500}>
  <TabContent tab = {tab} 스위치변경={스위치변경}/>
  </CSSTransition>
  </div> 
    )
  }
function RecentWatch(){
  let itid = localStorage.getItem('watched');
  let itnewid = JSON.parse(itid);
  if(itnewid == null){
    return <div>최근본 상품이 없습니다.</div>
}
else{
  return itnewid.map(function(i,n){
    return(
      <div className='colwrap'>
      <div className='col-md-4'>
        <img src={`https://codingapple1.github.io/shop/shoes${n+1}.jpg`} width="20%"></img>
      </div>
      </div>
     
    )
  })
}
}
function TabContent(props){
  useEffect(()=>{
    props.스위치변경(true);
  });
  if(props.tab === 0){
   return <div>0번째 내용입니다</div>
  }
  else if(props.tab === 1){
    return <div>1번째 내용입니다</div>
  }
  else{
    return <div>2번째 내용입니다</div>
  }
    
}

function Info(props){
  return(
<p>재고: {props.재고[0]}</p>
  )
}


function state를props화(state){
  return {
      state : state.reducer,
      alert열렸니 :state.reducer2
  }
}

export default connect(state를props화)(Detail);
  // export default Detail;