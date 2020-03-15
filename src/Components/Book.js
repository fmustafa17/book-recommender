import React from 'react';
import config from '../config';

import './Book.css'

class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        rank: 0,
        title: "",
        author: "",
        book_image: "",
        amazon_product_url: ""
      };
    }
  
    hardcoverFictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=';
    mykey = config.MY_KEY;

    combinedPrintAndEbookNonfictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=';
    combinedPrintAndEbookFictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=';

    componentDidMount() {
        fetch(this.hardcoverFictionURL + this.mykey)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results.books
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    handleGetRandomRank = (e) => {
      this.setState({
        rank: Math.floor(Math.random() * 15) + 1
      })
    };
  
    render() {
      let { error, isLoaded, items, rank } = this.state;
      if (error || !items[rank]) {
        return <button className="" onClick={this.handleGetRandomRank}>Give me a Best Seller</button>

      } 
      else if (!isLoaded) {
        return <div>Loading...</div>;
      }
      //if user is first landing on the page, only display button 
      else if (!rank) {
        return <button className="" onClick={this.handleGetRandomRank}>Give me a Best Seller</button>
      }
      else {
        return (
          <div className="content">
            <div>
              <button className="" onClick={this.handleGetRandomRank}>Give me a Best Seller</button>
            </div>
            <div className="bookCoverStyling">
              <img src={items[rank].book_image} alt="Book cover"/>
            </div>
            <div className="titleStyling">
              {items[rank].title}
            </div>
            <div className="authorStyling">
              by: {items[rank].author}
            </div>
            <div className="descriptionStyling">
              {items[rank].description}
            </div>
            <a href={items[rank].amazon_product_url}>Amazon URL</a> 
          </div>
        );
      }
    }

}

export default Book