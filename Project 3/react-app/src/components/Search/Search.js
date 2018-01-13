import React from "react";
import "./Search.css";

const Search = props =>

      <form className="search">
       <div className="form-group">

		<h1 className="search-title">Search for Space!</h1>
		<input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search For a Space"
        id="search"
    /> 
     
	</div>
  <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">
     Search</button> 
	   
</form>




export default Search;
