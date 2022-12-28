import React from 'react';
import './App.css';
import './index.css';
import { Blog, Features, Header, Footer, Possibility, whatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () =>{
    return (
        <div>
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <whatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App;