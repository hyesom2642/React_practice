import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Customer(props){
    return(
        <>
            <TableRow>
                <TableCell>{ props.customer.id }</TableCell>
                <TableCell><img src={ props.customer.image } /></TableCell>
                <TableCell>{ props.customer.name }</TableCell>
                <TableCell>{ props.customer.age }</TableCell>
                <TableCell>{ props.customer.gender }</TableCell>
                <TableCell>{ props.customer.job }</TableCell>
            </TableRow>
            {/* <CustomerProfile
            image = { props.customer.image }
            name = { props.customer.name }
            />
            <CustomerInfo 
            age = { props.customer.age }
            gender = { props.customer.gender }
            job = { props.customer.job }
            /> */}
        </>
    );
};

// function CustomerProfile(props){
//     return(
//         <div className="CustomerProfile-conatiner">
//             <img src={ props.image } alt="profile" />
//             <h3> { props.id }.</h3>
//             <h3> { props.name }</h3>
//         </div>
//     );
// }
// function CustomerInfo(props){
//     return(
//         <div className="CustomerInfo-container">
//             <p>{ props.age }</p>
//             <p>{ props.gender }</p>
//             <p>{ props.job }</p>
//         </div>
//     );
// }

export default Customer;