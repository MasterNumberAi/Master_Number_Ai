import React from 'react';
import WalletConnection from './wallet';
import ProjectDetails from './ProjectDetails';

function App() {
    return (
        <WalletConnection>
            <div className="app-container">
                <h1>Welcome to Master Number AI</h1>
                <p>This is the beginning of something amazing. Stay tuned for updates on Fomo Frog Coin, Master Number Coin, and much more!</p>
                <h2>Explore our Projects:</h2>
                <ul>
                    <li>Fomo Frog Coin</li>
                    <li>Master Number Coin</li>
                </ul>
                <ProjectDetails />
            </div>
        </WalletConnection>
    );
}

export default App;
