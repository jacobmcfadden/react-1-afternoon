import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            unfilteredArray: [
                {
                    name: 'June Doe',
                    title: 'Assistant Manager',
                    age: 34
                },
                {
                    name: 'Jimmy Kimball',
                    title: 'Leasing Agent',
                    age: 20,
                    hobby: 'coding'
                },
                {
                    name: 'Jesus Kristo',
                    title: 'Manager',
                    age: 99
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filteredArray(prop) {
        let filtArr = [];

        this.state.unfilteredArray.forEach((element, i, arr) => {
           let key;
            for(key in arr[i]) {
                if(key === prop) {
                    filtArr.push(arr[i]);
                }
            }
        })
        this.setState({ filteredArray: filtArr});
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
                <input type="text" className="inputLine" onChange={(e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filteredArray(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject;