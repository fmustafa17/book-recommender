import React from 'react';
import config from '../config';
class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    // URL = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key='
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
  
    render() {
      const { error, isLoaded, items } = this.state;
      let random = Math.random();
      let num_results = items.length;
      if (error) {
        return <div>Error: {error.message}</div>;
      } 
      else if (!isLoaded) {
        return <div>Loading...</div>;
      } 
      else {
        return (
          <div>
            <ul>
              {items.map(item => (
                <li key={item.title}>
                  {item.title} {item.author}
                  {item.description}
                  <img src={item.book_image} alt="Book cover" height="350" width="250"/>
                  <a href={item.amazon_product_url}>Amazon URL</a> 
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }

}

export default Book