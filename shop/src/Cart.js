import React, { useEffect, memo } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props){

    let state1 = useSelector((state) => state);
    console.log(state1);

    let dispatch1 = useDispatch();

    return (
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    {
                        state1.reducer.map( (item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ item.id }</td>
                                    <td>{ item.name }</td>
                                    <td>{ item.quan}</td>
                                    <td>
                                        <button onClick={ () => { dispatch1({ type: '수량감소' }) }}>-</button>
                                        <button onClick={ () => { dispatch1({ type: '수량증가' }) }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                {/* <tr>
                    <td>{ props.state[0].id}</td>
                    <td>{ props.state[0].name }</td>
                    <td>{ props.state[0].quan}</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>{ props.state[1].id}</td>
                    <td>{ props.state[1].name }</td>
                    <td>{ props.state[1].quan}</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>{ props.state[2].id}</td>
                    <td>{ props.state[2].name }</td>
                    <td>{ props.state[2].quan}</td>
                    <td>Table cell</td>
                </tr> */}
                </tbody>
            </Table>
            {
                props.alert열렸니 === true
                ?
                <div className="alert">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={ () => { props.dispatch({ type : "alert닫기" }) }}>닫기</button>
                </div>
                :
                null
            }

            <Parent 이름="김현주" 나이="20"></Parent>
        </div>
    )
}

function Parent(props){
    return(
        <div>
            <Child1 이름={props.이름}></Child1>
            <Child2 나이={props.나이}></Child2>
        </div>
    )
}
function Child1(props){
    useEffect( () => { console.log("렌더링됨1") });
    return <div>111</div>
}
// function Child2(props){
//     useEffect( () => { console.log("렌더링됨2") });
//     return <div>222</div>
// }
let Child2 = memo(function(){
    useEffect( () => { console.log("렌더링됨2") });
    return <div>222</div>
});



function state를props화(state){
    return {
        state : state.reducer, //state라는 이름의 props로 바꿔주셈
        alert열렸니 : state.reducer2,
    }
}
export default connect(state를props화)(Cart);
// export default Cart;