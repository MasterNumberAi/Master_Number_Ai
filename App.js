import React from 'react';
import WalletConnection from './src/wallet'; // Adjust the path based on its location
import './src/styles.css'; // Adjust the path to your styles.css

function App() {
    return (
        <WalletConnection>
            <div>
                <h1>Welcome to Master Number AI</h1>
                <p>This is the beginning of something amazing. Stay tuned for updates on Fomo Frog Coin, Master Number Coin, and much more!</p>
                <h2>Explore our Projects:</h2>
                <ul>
                    <li>Fomo Frog Coin</li>
                    <li>Master Number Coin</li>
                </ul>
                <button>Connect Phantom Wallet</button>
            </div>
        </WalletConnection>
    );
}

export default App;
