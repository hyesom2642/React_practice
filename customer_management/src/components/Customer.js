import React from 'react';

function Customer(props){
    return(
        <div className="Customer-container">
            <CustomerProfile
            image={ props.customer.image }
            id={ props.customer.id }
            name={ props.customer.name }
            />
            <CustomerInfo 
            age={ props.customer.age }
            gender={ props.customer.gender }
            job={ props.customer.job }
            />
        </div>
    );
};

function CustomerProfile(props){
    return(
        <div className="CustomerProfile-conatiner">
            <img src={ props.image } alt="profile" />
            <h3> { props.id }.</h3>
            <h3> { props.name }</h3>
        </div>
    );
}
function CustomerInfo(props){
    return(
        <div className="CustomerInfo-container">
            <p>{ props.age }</p>
            <p>{ props.gender }</p>
            <p>{ props.job }</p>
        </div>
    );
}

export default Customer;