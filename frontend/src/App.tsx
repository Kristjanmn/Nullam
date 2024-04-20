import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import { RouterProvider } from './components/RouterProvider';
import GlobalStyles from './GlobalStyles';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <div className="content">
                <Header />
                <RouterProvider />
                <Footer />
            </div>
        </div>
    );
}

export default App;
