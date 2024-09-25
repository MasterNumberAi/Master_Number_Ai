import React from 'react';
import WalletConnection from './wallet';
import './styles.css';

function App() {
    return (
        <WalletConnection>
            <div className="container">
                <h1>Welcome to Master Number AI</h1>
                <p>This is the beginning of something amazing. Stay tuned for updates on Fomo Frog Coin, Master Number Coin, and much more!</p>
                <h2>Explore our Projects:</h2>
                <div className="projects">
                    <ul>
                        <li><a href="fomo-frog-coin.html">Fomo Frog Coin</a></li>
                        <li><a href="master-number-coin.html">Master Number Coin</a></li>
                    </ul>
                </div>
                <div className="wallet-button">
                    <button>Connect Phantom Wallet</button>
                </div>
            </div>
        </WalletConnection>
    );
}

export default App;
