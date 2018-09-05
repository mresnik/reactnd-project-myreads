import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

const shelves = [
        { display: "Currently Reading", shelf: "currentlyReading"},
        { display: "Want To Read", shelf: "wantToRead"},
        { display: "Read", shelf: "read"}
      ]

class CreateShelves extends Component {

  state = {
    books: []
  }



      componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
        console.log(books)
      })
    }

  render() {
        const { books } = this.state
          return (
          <div className="bookshelf">
    {shelves.map((shelf) => (
              <div>
                <h2 key={shelf.index} className="bookshelf-title">{shelf.display}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books.map((book) => (
                        <div>
                    {book.shelf === shelf.shelf &&
                    <li key={book.index}>

                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>

                    </li>
                  }
                  </div>
                  ))}
                  </ol>
                </div>
              </div>



            ))}
            </div>
  )

}}

export default CreateShelves
