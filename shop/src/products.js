/* eslint-disable */

import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Products(props){

    let history = useHistory();
    let { productId } = useParams();
    let productfind = props.productDetail.find(function(item){
        return item.id == productId
    });

    return (
        <>
        <div className="container">
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
                    <button className="btn btn-danger">주문하기</button>

                    <button onClick={ () => history.goBack() } className="btn btn-danger">뒤로가기1</button> 
                    
                    <button onClick={ () => history.push('/') } className="btn btn-danger">뒤로가기2</button> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Products;