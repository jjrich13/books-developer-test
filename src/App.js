import React, { Component } from 'react';
import axios from 'axios';
import Alphabet from './components/Alphabet'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    axios.get('/api/books').then(response => {
      this.setState({books:response.data})
    }).catch(err => {
      console.log(err);
      
    })
  }

  render() {
    console.log(this.state.books);
    
    return (
      <div>
        Sup
        <Alphabet />
      </div>
    );
  }
}

export default App;
