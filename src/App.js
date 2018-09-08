import React from 'react'
import CreateShelves from './CreateShelves'
import SearchForm from './SearchForm'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
/*import { Link } from 'react-router-dom'*/
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      })
  }

  componentDidMount() {
    this.getBooks()
  }

  newShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.getBooks()
    }

  render() {
    return (
        <div className="app">
          <Route path="/search" render={() => (
              <SearchForm newShelf={this.newShelf}/>
          )}/>
          <Route exact path="/" render={() => (
              <CreateShelves books={this.state.books} newShelf={this.newShelf}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
