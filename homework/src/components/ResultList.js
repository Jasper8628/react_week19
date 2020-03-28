import React from "react";

function ResultList(props) {
    console.log(props);
    return (

        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <img alt='' className="img-fluid" src={result.picture.medium} />
                    <div>{result.name.first}</div>
                    <div>{result.name.last}</div>
                    <div>Email: {result.email}</div>
                    <div>Phone Number: {result.phone}</div>
                    <div>Age: {result.dob.age}</div>
                </li>
            ))}
        </ul>
    );
}
export default ResultList;