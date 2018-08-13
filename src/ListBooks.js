import React, { Component } from 'react'
import Book from './Book'

/**
 * This component holds all the books and its respective bookshelves and gets hooked up on Home page component
 * and uses Book component to get all the books details
 */
class ListBooks extends Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                this.props.books.filter(book => book.shelf === 'currentlyReading').map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                        />
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                this.props.books.filter(book => book.shelf === 'wantToRead').map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                        />
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                this.props.books.filter(book => book.shelf === 'read').map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                        />
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBooks