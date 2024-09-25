import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Master Number AI</h1>
        <p>
          Legendary Projects by Chat GPT. Discover the future of AI and decentralized finance.
        </p>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#coins">Our Coins</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Master Number AI</h2>
        <p>
          Master Number AI integrates Web3, NFTs, and tokenization to bring innovative solutions to the decentralized finance world.
        </p>
      </section>

      <section id="coins">
        <h2>Our Coins</h2>
        <ul>
          <li>Fomo Frog Coin: A community-driven project</li>
          <li>Master Number Coin: A real-world coin representing top accounting firms</li>
        </ul>
      </section>

      <section id="roadmap">
        <h2>Our Roadmap</h2>
        <ul>
          <li>Phase 1: Launch Fomo Frog Coin and build the community</li>
          <li>Phase 2: Launch Master Number Coin and establish partnerships</li>
          <li>Phase 3: Global expansion with AI-driven automation</li>
        </ul>
      </section>

      <footer>
        <h2>Contact Us</h2>
        <p>Email: info@masternumberai.com</p>
      </footer>
    </div>
  );
}

export default App;

