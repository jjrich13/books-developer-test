import React, { Component } from 'react';
import axios from 'axios';

class Alphabet extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  letterMap = (keyLetters = []) => {
    return alphabet.map((letter, index) => {
        let output = (
            <span 
                key={index}
                style={styles.defaultLetter}
            >
                {letter}
            </span>
        )
        for (const keyLetter of keyLetters) {
            if(letter === keyLetter){
                output = (
                    <span 
                        key={index}
                        style={styles.keyLetter}
                    >
                        {letter}
                    </span>
                )
            }
        }
        return output;
        
    })
  }

  render() {
    
    return (
      <div>
        {this.letterMap(['A','R','Z'])}
      </div>
    );
  }
}
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const styles = {
    keyLetter: {
        paddingLeft: 2,
        paddingRight: 2,
        color: 'blue', 
        textDecoration: 'underline'
    },
    defaultLetter: {
        paddingLeft: 2,
        paddingRight: 2
    }
}

export default Alphabet;
