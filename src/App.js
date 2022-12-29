import React from 'react';
import './App.css';
import './index.css';
import { Blog, Features, Header, Footer, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () =>{
    return (
        <div>
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;