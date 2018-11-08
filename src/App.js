import React, { Component } from 'react';
import axios from 'axios';

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
      </div>
    );
  }
}

export default App;
