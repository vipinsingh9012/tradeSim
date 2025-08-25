import React from 'react';

interface TradeButtonProps {
    onTrade: () => void;
    isBuying: boolean;
}

const TradeButton: React.FC<TradeButtonProps> = ({ onTrade, isBuying }) => {
    return (
        <button 
            onClick={onTrade} 
            className={`trade-button ${isBuying ? 'buy' : 'sell'}`}
            style={{
                backgroundColor: isBuying ? '#4CAF50' : '#F44336',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
            }}
        >
            {isBuying ? 'Buy' : 'Sell'}
        </button>
    );
};

export default TradeButton;