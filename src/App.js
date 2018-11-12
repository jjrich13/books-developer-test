import React, { Component } from 'react';
import axios from 'axios';
import Alphabet from './components/Alphabet'
import AddBook from './components/AddBook'
import AllBooks from './components/AllBooks'

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
        if(book.title.toUpperCase().startsWith(letter.toUpperCase())){
          addLetter = false
        }
      }
      if(addLetter){
        output.push(book.title[0].toUpperCase())
      }
    }
    return output.sort()
  }

  scroll = (letter) => {
    let target = document.getElementById(letter)
    target.scrollIntoView(true);
  }

  render() {
    console.log(this.generateSectionHeaders(this.state.books));
    
    return (
      <div>
        <Alphabet 
          keyLetters = {this.generateSectionHeaders(this.state.books)}
          scroll={this.scroll}
        />
        <AllBooks 
          books={this.state.books}
          keyLetters = {this.generateSectionHeaders(this.state.books)}
        />
        <AddBook 
          fetchBooks={this.fetchBooks}
        />
      </div>
    );
  }
}

export default App;
