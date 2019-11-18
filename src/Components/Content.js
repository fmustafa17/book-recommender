import React from "react"

import Book from './Book';

function Content() {
    return(
        <div>
            <button className="calculateButton" onClick="calculate()">Give me a Best Seller</button>
            <Book/>
        </div>
    )
}

export default Content