import React, { Component } from 'react';
import axios from 'axios';
import BooksByLetter from './BooksByLetter';

class AllBooks extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    const content = this.props.keyLetters.map((letter, index) => {
        return(
            <BooksByLetter 
                books={this.props.books}
                letter={letter}
                key={letter}
            />
        )
    })
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default AllBooks;
