/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Customer from './components/Customer.js';

// Table import
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function App() {
  // 고객정보
  let [customer, setCustomer] = useState([
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
    name: '사람1',
    age: 20,
    gender: '남',
    job: '대학생'
  },
  {
    id: 2,
    image: "http://placeimg.com/64/64/2",
    name: '사람2',
    age: 27,
    gender: '남',
    job: '직장인'
  },
  {
    id: 3,
    image: "http://placeimg.com/64/64/3",
    name: '사람3',
    age: 23,
    gender: '여',
    job: '무직'
  }]);

  return (
    <div className="App">
      <div className="background">
        <h2> Customer Management System </h2>
        {/* <Customer customer={ customer[0] } />
        <Customer customer={ customer[1] } />
        <Customer customer={ customer[2] } /> */}
        {/* {
          customer.map( (v) => {
            return(
              <Customer key={customer.id} customer={ v }/>
            )
          })
        } */}
        <Paper className="root">
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>사진</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>나이</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                { customer.map( (v) => { return( <Customer key={customer.id} customer={ v } />) }) }
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}
export default App;
