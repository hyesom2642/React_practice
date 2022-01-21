/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './products.scss';

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
        </div>
        </>
    )
}

function InventoryInfo(props){
    return(
        <p>재고 : {props.재고[0]} </p>
    )
}

export default Products;