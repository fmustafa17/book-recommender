import React from 'react';

class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    URL = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key='
    key = 'ofyYAAJFdEDGMvnauyBRBz52LpYUDpcf';
    secret = 'GM2G8UlQZIv1ZiAj';
    componentDidMount() {
        fetch(this.URL + this.key)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results
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
      if (error) {
        return <div>Error: {error.message}</div>;
      } 
      else if (!isLoaded) {
        return <div>Loading...</div>;
      } 
      else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.book_title}>
                {item.book_title} {item.book_author}
              </li>
            ))}
          </ul>
        );
      }
    }

}

export default Book