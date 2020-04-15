import React, { Component } from "react";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: [],
        filter: [],
        sort: "asc"
    }

    componentDidMount() {
        this.ApiCall();
    }

    ApiCall = () => {
        API.search()
            .then(res => this.setState({
                results: res.data.results,
                filter: res.data.results
            })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case "first":
                this.setState({
                    search: value,
                    filter: this.state.results.filter(result => result.name.first.toLowerCase().indexOf(value) != -1)
                });
                break;
            case "last":

                this.setState({
                    search: value,
                    filter: this.state.results.filter(result => result.name.last.toLowerCase().indexOf(value) != -1)
                });
                break;
        }
        console.log(name);



    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.ApiCall();
    };
    handleSort = event => {
        function compareAsc(a, b) {
            if (a.dob.age > b.dob.age) return 1;
            if (b.dob.age > a.dob.age) return -1;
        }
        function compareDesc(a, b) {
            if (a.dob.age > b.dob.age) return -1;
            if (b.dob.age > a.dob.age) return 1;
        }

        if (this.state.sort === "asc") {
            this.setState({
                filter: this.state.results.sort(compareAsc),
                sort: "desc"
            });
        } else {
            this.setState({
                filter: this.state.results.sort(compareDesc),
                sort: "asc"
            });
        }

    }

    render() {
        return (
            <div>
                <SearchForm
                    //search = {this.state.search}
                    //handleFormSubmit = {this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}

                />
                <ResultList
                    buttName={this.state.sort}
                    results={this.state.filter}
                    handleSort={this.handleSort}
                />
            </div>
        );
    }
}
export default SearchResultContainer;