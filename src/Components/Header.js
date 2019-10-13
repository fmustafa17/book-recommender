import React from "react"

class Header extends React.Component {
    render() {
        const title = "Book Recommender"
        return(
            <div>
                <h1>{title}</h1>
                <h2>Which book should you read next?</h2>
            </div>
        )
    }
    
}

export default Header