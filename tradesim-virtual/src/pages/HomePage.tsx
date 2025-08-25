import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import './HomePage.css'; // Assuming you will create a CSS file for styling

const HomePage: React.FC = () => {
    const history = useHistory();

    const handleStartTrading = () => {
        history.push('/market');
    };

    return (
        <div className="home-page">
            <Header />
            <div className="home-content">
                <h1 className="app-name">TradeSim Virtual</h1>
                <button className="start-trading-button" onClick={handleStartTrading}>
                    <span role="img" aria-label="finger">👉</span> Start Trading
                </button>
            </div>
        </div>
    );
};

export default HomePage;