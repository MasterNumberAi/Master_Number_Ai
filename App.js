import React from 'react';
import WalletConnection from './wallet';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function App() {
    return (
        <WalletConnection>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Welcome to Master Number AI</h1>
                <p>This is the beginning of something amazing. Stay tuned for updates on Fomo Frog Coin, Master Number Coin, and much more!</p>
                <h2>Explore our Projects:</h2>
                <ul>
                    <li><a href="#">Fomo Frog Coin</a></li>
                    <li><a href="#">Master Number Coin</a></li>
                </ul>
                <WalletMultiButton />
                <p>Connected wallet: <span id="wallet-address">Not connected</span></p>
            </div>
        </WalletConnection>
    );
}

export default App;
