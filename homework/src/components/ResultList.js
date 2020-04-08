import React from "react";

function ResultList(props) {
    return (
        <table className="table">
            <thead>
                <tr >
                    <th scope="col">Photo</th>
                    <th scope="col"> Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col"  >Age <button 
                    name="age"
                    type="button"
                    onClick={props.handleSort}>{props.buttName}</button> </th>
                </tr>

            </thead>
            {props.results.map(result => (
                <tbody>
                    <tr key={result.id}>
                        <td>
                            <img alt='' className="img-fluid" src={result.picture.medium} />
                        </td>
                        <td> {result.name.first} {result.name.last}</td>
                        <td> {result.email}</td>
                        <td> {result.phone}</td>
                        <td> {result.dob.age}</td>
                    </tr>

                </tbody>
            ))}
        </table>
    );
}
export default ResultList;