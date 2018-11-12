import React, { Component } from 'react';

class BooksByLetter extends Component {
    constructor(props){
        super(props)
            this.state = {

            }
        }

    generateBooksListItems = () => {
        let sortedBooks = []
        for(const book of this.props.books){
            if(book.title.toUpperCase().startsWith(this.props.letter.toUpperCase())){
                sortedBooks.push(book)
            }
        }
        return(
            sortedBooks.map((book, index) => {
                return(
                    <li key={book.ISBN}>
                        {book.title}
                    </li>
                )
            })
        ) 
    }

    render() {

        return (
            <div>
                <h2 id={this.props.letter}>
                    {this.props.letter}
                </h2>
                <ul>
                    {this.generateBooksListItems()}
                </ul>
            </div>
        );
    }
}

export default BooksByLetter;
