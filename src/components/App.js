import React from 'react';
import '../styles/App.css';

function App() {
    return (
        <div>
            <nav>
                <img class="logo" src="../img/logo.png" alt="logo" />
                <a href="home.html"><div>Home</div></a>
                <a href="about-me"><div>About Me</div></a>
                <a href="portfolio"><div>Portfolio</div></a>
                <a href="linkedin"><div>LinkedIn</div></a>
            </nav>
            <main>
                <div class="profile">
                    <img src="../img/memoji.png" alt="profile" />
                    <h1>Michael Arnell</h1>
                    <p>I'm a web developer.</p>
                </div>
            </main>
        </div>
    )
}

export default App;