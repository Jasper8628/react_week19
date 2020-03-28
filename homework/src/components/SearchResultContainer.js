import React, { Component } from "react";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    }

    ApiCall = () => {
        API.search()
            .then(res => this.setState({ results: res.data.results })
            )
            .catch(err => console.log(err));
    };


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }; 
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.ApiCall();
      };

    render() {
        return (
            <div>
                <SearchForm
                 search = {this.state.search}
                 handleFormSubmit = {this.handleFormSubmit}
                 
                />
                <ResultList results={this.state.results} />
            </div>
        );
    }
}
export default SearchResultContainer;