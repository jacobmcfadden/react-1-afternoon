import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ['This is the first one', 'This is the second one', 'Triple threat string', 'quad string engage'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(input) {
        this.setState({ userInput: input });
    }

    filterArray(val) {
        let filtArr = [];
        
        this.state.unfilteredArray.forEach((element, i, arr) => {
            if(element.includes(val)) {
                filtArr.push(arr[i]);
            }
        })
        this.setState({ filteredArray: filtArr});
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
                <input type="text" className="inputLine" onChange={(e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}

export default FilterString;