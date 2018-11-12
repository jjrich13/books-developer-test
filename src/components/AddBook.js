import React, { Component } from 'react';
import axios from 'axios';

class AddBook extends Component {
  constructor(props){
    super(props)
    this.state = {
        ISBN: '',
        title: '',
        description: '',
        error: ''
    }
  }

  addBook = () => {
      if(this.state.ISBN === '' || this.state.title === '' || this.state.description === ''){
          this.setState({error: 'Fill out all fields.'})
          return
      }
      axios.post('/api/books', this.state).then(response => {
          this.props.fetchBooks()
          this.setState({
            ISBN: '',
            title: '',
            description: '',
            error: ''
          })
      }).catch(err => {
          console.log(err);
          this.setState({
              error: 'ISBN must be unique.'
          })
      })
  }

  handleInputChangeFor = (property) => (event) => {
    this.setState({
        [property]: event.target.value
    })
  }

  renderErrorText = () => {
      if(this.state.error){
          return(
            <span style={styles.errorStyle}>{this.state.error}</span>
          )
      }
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <h2>Add Book</h2>
        <input 
            type="number" 
            placeholder="ISBN"
            value={this.state.ISBN}
            onChange={this.handleInputChangeFor('ISBN')}
        />
        <input 
            type="text" 
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleInputChangeFor('title')}
        />
        <input 
            type="text" 
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleInputChangeFor('description')}
        />
        <button onClick={this.addBook}>Add Book</button>
        {this.renderErrorText()}
      </div>
    );
  }
}

const styles = {
    errorStyle: {
        color: 'red'
    }
}
export default AddBook;
