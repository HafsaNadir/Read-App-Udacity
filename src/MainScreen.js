import React, {Component} from "react"
import Books from "./Book"
import {Link} from "react-router-dom"

export class MainScreen extends Component
{

  render()
  {
    const  {books, updateShelf}=this.props;
     return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books.length===0?  <div className="no-search">No Books Found</div>:
                books.filter( book => book.shelf==="currentlyReading").map(book => <Books book={book} key={book.id} updateShelf={updateShelf}/>)}
                </ol>
              </div>
            </div>  
                  
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books.length===0?  <div className="no-search">No Books Found</div>:
                books.filter( book => book.shelf==="wantToRead").map(book => <Books book={book} key={book.id} updateShelf={updateShelf}/>)}  
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books.length===0?  <div className="no-search">No Books Found</div>:
                books.filter( book => book.shelf==="read").map(book => <Books book={book} key={book.id} updateShelf={updateShelf}/>)}  
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'><button>Add a book</button></Link>
        </div>
      </div>
      )
  }
}