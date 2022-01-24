import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
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
                        props.state.map( (item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ item.id }</td>
                                    <td>{ item.name }</td>
                                    <td>{ item.quan}</td>
                                    <td>
                                        <button onClick={ () => { props.dispatch({ type: '수량감소' }) }}>-</button>
                                        <button onClick={ () => { props.dispatch({ type: '수량증가' }) }}>+</button>
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
        </div>
    )
}

function state를props화(state){
    return {
        state : state //state라는 이름의 props로 바꿔주셈
    }
}

export default connect(state를props화)(Cart);
// export default Cart;