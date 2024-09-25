import React from 'react';
import WalletConnection from './wallet';

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
                <h3>Connect Phantom Wallet</h3>
            </div>
        </WalletConnection>
    );
}

export default App;
