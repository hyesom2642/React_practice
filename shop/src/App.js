/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import Data from './data.js';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Products from './products.js';


function App() {

  let [shoesdata, setShoesdata] = useState(Data);

  return (
    <div className="App">
      <>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand><Link to="/">Shop</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">HOME</Link></Nav.Link>
          <Nav.Link><Link to="/product1">PRODUCTS</Link></Nav.Link>
          <Nav.Link>Service</Nav.Link>
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
          </div>
        </Route>
        <Route path="/product1/:productId">
          <Products productDetail={ shoesdata }/>
        </Route>
      </Switch>
      </>
    </div>
  );
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