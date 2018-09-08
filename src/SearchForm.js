import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchForm extends Component  {

  state = {
    query: '',
    newBooks: []
  }

updateQuery = (query) => {
  this.setState({ query: query })
  if (query.length >0) {
    this.bookSearch(query)
    } else {
    this.setState({ newBooks: [] })
  }}

bookSearch = (query) => {

BooksAPI.search(query).then((newBooks) => {
  if  (!query) {
    this.setState({ newBooks: [] })
    } else if (newBooks.error) {
    this.setState({ newBooks: [] })
    } else {
    this.setState({ newBooks: newBooks })
    }}
  )}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>
            <div className="search-books-input-wrapper">
                <input
                  type='text'
                  placeholder='Search by title or author'
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
            {this.state.newBooks.map(book => {
                let currentShelf = 'none';

                this.props.shelfBooks.map(shelfBook => (
                  (shelfBook.id === book.id) && (currentShelf = shelfBook.shelf)
                ));

              return(
                <li key={book.id}>
                  <Book book={book} newShelf={this.props.newShelf} currentShelf={currentShelf}  />
                </li>
              )
            }
          )}
            </ol>
          </div>
      </div>
    )
  }
}


export default SearchForm
