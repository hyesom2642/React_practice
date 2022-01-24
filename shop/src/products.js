/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav, Link,  } from 'react-bootstrap';
import './products.scss';
import { CSSTransition } from 'react-transition-group';

function Products(props){
    
    let [ alert, setAlert ] = useState(true);
    useEffect( () => {
        // 페이지 로딩 후 2초후에 alert창이 사라지게 한다.
        let timmer = setTimeout( () => { setAlert(false)}, 2000);
        return function(){
            clearTimeout(timmer)
        }
    }, [ alert ]);

    let history = useHistory();
    let { productId } = useParams();
    let productfind = props.productDetail.find(function(item){
        return item.id == productId
    });

    let [tab, setTab] = useState(0);

    let [aniSwitch, setAniSwitch] = useState(false);

    return (
        <>
        <div className="container">
            <div>
                <h2 className="mt-4 title">Products</h2>
            </div>
            <input />
            {
                alert === true 
                ?
                (
                    <div className="alert">
                        <p>재고가 얼마 남지 않았습니다.</p>
                    </div>
                )
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={props.productDetail[productId].img} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    {/* <h4 className="pt-5">{ props.productDetail.id[productId].title }</h4> */}
                    <h4 className="pt-5">{ productfind.title }</h4>
                    {/* <p>{ props.productDetail[productId].content }</p> */}
                    <p>{ productfind.content }</p>
                    {/* <p>{ props.productDetail[productId].price }</p> */}
                    <p>{ productfind.price }원</p>
                    <InventoryInfo 재고={props.재고} />
                    <button className="btn btn-danger" onClick={ () => { props.재고변경함수() }}>주문하기</button>
                    <button onClick={ () => history.goBack() } className="btn btn-danger">뒤로가기1</button> 
                    <button onClick={ () => history.push('/') } className="btn btn-danger">뒤로가기2</button> 
                </div>
            </div>

            <Nav className="mt-5" variant="pills" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={ () => { setTab(0); setAniSwitch(false) } }>1번 Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={ () => { setTab(1); setAniSwitch(false) } }>2번 Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={ () => { setTab(2); setAniSwitch(false) } }>3번 Tab</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={aniSwitch} classNames="wow" timeout={1000}>
            <TabContent clickedTab={ tab } switch={setAniSwitch}/>
            </CSSTransition>
        </div>
        </>
    )
}

function InventoryInfo(props){
    return(
        <p>재고 : {props.재고[0]} </p>
    )
}

function TabContent(props){
    useEffect( () => {
        props.switch(true);
    });

    if(props.clickedTab === 0){
        return <div>1번 Tab 내용</div>
    } else if(props.clickedTab === 1){
        return <div>2번 Tab 내용</div>
    } else if(props.clickedTab === 2){
        return <div>3번 Tab 내용</div>
    }
}

export default Products;