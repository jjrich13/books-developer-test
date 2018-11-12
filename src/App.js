import React, { Component } from 'react';
import axios from 'axios';
import Alphabet from './components/Alphabet'
import AddBook from './components/AddBook'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks = () => {
    axios.get('/api/books').then(response => {
      this.setState({books:response.data})
    }).catch(err => {
      console.log(err);
      
    })
  }

  generateSectionHeaders = (books =[]) => {
    let output =[]
    for(const book of books){
      let addLetter = true
      for(const letter of output){
        if(letter == book.title[0]){
          addLetter = false
        }
      }
      if(addLetter){
        output.push(book.title[0])
      }
    }
    return output
  }

  render() {
    console.log(this.generateSectionHeaders(this.state.books).sort());
    
    return (
      <div>
        <Alphabet />
        <ul>
          {this.state.books.map((book, index) => {
            return(
              <li key={index}>
                {book.title}
              </li>
            )
          }) || `<li>Loading...</li>`}
        </ul>
        <AddBook 
          fetchBooks={this.fetchBooks}
        />
      </div>
    );
  }
}

export default App;
