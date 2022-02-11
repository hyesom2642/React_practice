import React, { useState } from 'react';
import './App.css';
import Customer from './components/Customer.js';

function App() {
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
      <div className="gray-background">
        <h2> Customer Management System </h2>
        {/* <Customer customer={ customer[0] } />
        <Customer customer={ customer[1] } />
        <Customer customer={ customer[2] } /> */}
        {
          customer.map( (v) => {
            return(
              <Customer customer={ v }/>
            )
          })
        }
      </div>
    </div>
  );
}
export default App;
