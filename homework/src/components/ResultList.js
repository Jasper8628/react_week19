import React from "react";

function ResultList(props) {
    console.log(props);
    return (

        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <img alt='' className="img-fluid" src={result.picture.medium} />
                    <span>{result.name.first}</span>
                    <span>{result.name.last}</span>
                    <span>Email: {result.email}</span>
                    <span>Phone Number: {result.phone}</span>
                    <span>Age: {result.dob.age}</span>
                </li>
            ))}
        </ul>
    );
}
export default ResultList;