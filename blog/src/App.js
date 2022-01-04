/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['블로그 글제목1', '블로그 글제목2', '블로그 글제목3']);
  function 제목바꾸기(){
    // 글제목변경( ['변경된 블로그 글제목1', '블로그 글제목2', '블로그 글제목3'] );
    var newArray = [...글제목];
    newArray[0] = '변경된 블로그 글제목1';
    글제목변경( newArray );
  }
  let [좋아요, 좋아요변경] = useState(0);

  let [modal, modal변경] = useState(false);

  // let posts = '강남고기맛집';
  return (
    <div className="App">
      <div className="navbar">
        <div>Blog예제</div>
      </div>
      {/* <div className="list">
        <h3> { posts } </h3>
        <p> 2022-01-04 </p>
        <hr />
      </div> */}
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요 + 1)} }>❤</span> { 좋아요 } </h3>
        <p> 2022-01-04 </p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p> 2022-01-04 </p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={ () => modal변경(!modal) }> { 글제목[2] } </h3>
        <p> 2022-01-04 </p>
        <hr />
      </div>

      {
        modal === true ? <Modal /> : null
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
