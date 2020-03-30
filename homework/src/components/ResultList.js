import React from "react";

function ResultList(props) {
    console.log(props);
    return (
        <table className="list-group">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th> Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Age</th>
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