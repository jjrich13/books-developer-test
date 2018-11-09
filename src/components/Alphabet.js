import React, { Component } from 'react';
import axios from 'axios';

class Alphabet extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  letterMap = () => {
    return alphabet.map((letter, index) => {
        return(
            <span key={index}>
                {letter}
            </span>
        )
    })
  }

  render() {
    
    return (
      <div>
        {this.letterMap()}
      </div>
    );
  }
}
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

export default Alphabet;
