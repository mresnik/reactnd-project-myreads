import React, { Component } from 'react'
//import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

const shelves = [
        { display: "Currently Reading", shelf: "currentlyReading", id: "1"},
        { display: "Want To Read", shelf: "wantToRead", id: "2"},
        { display: "Read", shelf: "read", id: "3"}
      ]

class CreateShelves extends Component {






  render() {
          return (

            <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
                </div>

          <div className="bookshelf">
    {shelves.map((shelf) => (
              <div key={shelf.id}>
                <h2 className="bookshelf-title">{shelf.display}</h2>
                <div className="bookshelf-books">
                      <ol className="books-grid">
                          {this.props.books.map((book) => (
                            <div key={book.id}>
                        {book.shelf === shelf.shelf &&
                        <li>
                          <Book book={book} newShelf={this.props.newShelf}
                          currentShelf={shelf.shelf}
                          />
                        </li>
                      }
                      </div>
                      ))}
                      </ol>
                </div>
              </div>
            ))}


            </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div></div>
  )

}}

export default CreateShelves
