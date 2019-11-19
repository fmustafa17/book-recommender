import React from 'react';
import config from '../config';
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
  
    URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='
    mykey = config.MY_KEY;
    componentDidMount() {
        fetch(this.URL + this.mykey)
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
      // const { error, isLoaded, items } = this.state;
      let { error, isLoaded, items, rank } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
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
          <div>
            <button className="" onClick={this.handleGetRandomRank}>Give me a Best Seller</button>
            <img src={items[rank].book_image} alt="Book cover" height="350" width="250"/>
            {items[rank].title} {items[rank].author}
            {items[rank].description}
            <a href={items[rank].amazon_product_url}>Amazon URL</a> 
          </div>
        );
      }
    }

}

export default Book