import React from 'react';
import './App.css';
import Header from './Components/Header';
import Book from './Components/Book';
import Footer from './Components/Footer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Book/>
                <Footer/>
            </div>
        )
    }
}

export default App