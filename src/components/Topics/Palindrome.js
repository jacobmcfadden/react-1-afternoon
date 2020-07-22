import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: '',
            reversedInput: '',
            originalInput: ''
        }
    }
    
    handleChange(input) {
        this.setState({ userInput: input });
    }

    palindromeIt(userInput) {
        const revStr = userInput.trim().split('').reverse().join('');
        const normStr = userInput.trim();
      
        if(revStr === normStr) {
            this.setState({ userInput: '', palindrome: 'true', originalInput: normStr, reversedInput: revStr });

        } else {
            this.setState({ userInput: '', palindrome: 'false', originalInput: normStr, reversedInput: revStr })
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input type="text" className="inputLine" onChange={(e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={() => this.palindromeIt(this.state.userInput)}> Check </button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
                <span className="resultsBox"> Original: { this.state.originalInput } </span>
                <span className="resultsBox"> Reversed: { this.state.reversedInput } </span>
            </div>
        )
    }
}

export default Palindrome;