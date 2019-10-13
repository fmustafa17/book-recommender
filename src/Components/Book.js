import React from 'react';

import bookData from './BookData';

class Book extends React.Component {
    render() {
        bookData.map(book => {});
        return(
            <div>
                <img src="http://placekitten.com/g/300/400"/>
            </div>
        )
    }
}

export default Book