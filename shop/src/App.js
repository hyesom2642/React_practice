/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import Data from './data.js';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Products from './products.js';
import axios from 'axios';

import Cart from './Cart.js';

function App() {

  let [shoesdata, setShoesdata] = useState(Data);
  let [loadingUI, setloadingUI] = useState(false);

  let [inventory, setInventory] = useState([10, 11, 12]);
  function changeInventory(){
    let newInventory = [...inventory];
    newInventory = inventory.map(function(신발재고){
      return 신발재고-1;
    });
    setInventory(newInventory);
  }

  let 재고context = React.createContext();

  

  return (
    <div className="App">
      <>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand as={ Link } to="/">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={ Link } to="/">HOME</Nav.Link>
          <Nav.Link as={ Link } to="/product1">PRODUCTS</Nav.Link>
          <Nav.Link as={ Link } to="/cart">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </>
      <>
      <Switch>
        <Route exact path="/">
          <div className="background">
            <h1 className="display-4">Season 20% off</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>

          <button className="btn btn-danger">가격 높은순</button>
          <button className="btn btn-danger">가격 낮은순</button>
          <div className="container">
            <div className="row">            
                {
                  shoesdata.map(function(a, i){
                    return(
                      <Product shoes={ shoesdata[i] } i={i} key={i}/>
                    )
                  })
                }            
            </div>
            <button className="btn btn-primary" onClick={ () => {
              // 로딩중이라는 UI 보이게 처리
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then( (result) => {
                // 로딩중이라는 UI 안보이게 처리
                setloadingUI(false)
                setShoesdata([ ...shoesdata, ...result.data ]);
              })
              .catch( () => {
                console.log('실패');
                setloadingUI(true)
              })
            }}>더보기</button>
            {
              loadingUI === true
              ? ( <Loading /> )
              : null
            }
          </div>
        </Route>

        <Route path="/product1/:productId">
          <Products productDetail={ shoesdata } 재고={inventory} 재고변경={setInventory} 재고변경함수={changeInventory} />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      </>
    </div>
  );
}
function Loading(){
  return(
    <div className="alert">
      <p>Loading....</p>
    </div>
  )
}

function Product(props){
  return (
    <>
    <div className="col-md-4">
      <img src={ props.shoes.img } width="100%" />
      <h4> { props.shoes.title } </h4>
      <p> { props.shoes.content } & { props.shoes.price } </p>
    </div>
    </>
  )
}

export default App;