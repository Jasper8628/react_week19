import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group"  >
        <label htmlFor="search">Search First Name:</label>
        <input
          onChange={props.handleInputChange}
          //value={props.search}
          name="first"
          type="text"
          className="form-control col-md-3"
          placeholder="Search by first name"
        />
        <br/>
         <label htmlFor="search">Search Last Name:</label>
        <input
          onChange={props.handleInputChange}
          //value={props.search}
          name="last"
          type="text"
          className="form-control col-md-3"
          placeholder="Search by last name"
         
        />
      </div>
    </form>
  );
}

export default SearchForm;