import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ backgroundColor: '#1e1e1e', padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: '#ffffff', margin: 0 }}>TradeSim Virtual</h1>
            <button 
                style={{ 
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    fontSize: '18px', 
                    cursor: 'pointer', 
                    backgroundColor: '#007bff', 
                    color: '#ffffff', 
                    border: 'none', 
                    borderRadius: '5px' 
                }}
                onClick={() => window.location.href = '/market'}
            >
                <span role="img" aria-label="finger">👉</span> Start Trading
            </button>
        </header>
    );
};

export default Header;