import React from 'react';
import '../styles/App.css';
import Logo from '../img/logo.png';
import Memoji from '../img/memoji.png'

function App() {
    return (
        <div class="default-wrapper">
            <nav>
                <img class="logo" src={Logo} alt="logo" />
                <a href="home.html"><div>Home</div></a>
                <a href="about-me"><div>About Me</div></a>
                <a href="portfolio"><div>Portfolio</div></a>
                <a href="linkedin"><div>LinkedIn</div></a>
            </nav>
            <main>
                <div class="profile">
                    <img src={Memoji} alt="profile" />
                    <h1>Michael Arnell</h1>
                    <p>I'm a web developer.</p>
                </div>
            </main>
        </div>
    )
}

export default App;