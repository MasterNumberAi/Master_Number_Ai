import React from 'react';
import WalletConnection from './wallet';
import './styles.css';

function App() {
    return (
        <WalletConnection>
            <div className="app-container">
                <h1>Welcome to Master Number AI</h1>
                <p>This is the beginning of something amazing. Stay tuned for updates on Fomo Frog Coin, Master Number Coin, and much more!</p>
                <h2>Explore Our Projects:</h2>
                <ul>
                    <li><a href="#fomo-frog-coin">Fomo Frog Coin</a></li>
                    <li><a href="#master-number-coin">Master Number Coin</a></li>
                </ul>
                <div className="wallet-section">
                    <h3>Connect Phantom Wallet</h3>
                    <p>Connected wallet: {/* Display connected wallet address here */}</p>
                </div>
            </div>
        </WalletConnection>
    );
}

export default App;
