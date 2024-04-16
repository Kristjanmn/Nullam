import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import { RouterProvider } from './components/RouterProvider';
import GlobalStyles from './GlobalStyles';

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <div className="content">
                <Header />
                <RouterProvider />
            </div>
        </div>
    );
}

export default App;
