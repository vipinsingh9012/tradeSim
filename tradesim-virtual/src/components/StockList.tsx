import React from 'react';

interface Stock {
    name: string;
    price: number;
    changePercent: number;
}

interface StockListProps {
    stocks: Stock[];
}

const StockList: React.FC<StockListProps> = ({ stocks }) => {
    return (
        <div className="stock-list">
            <h2>Live Stocks</h2>
            <ul>
                {stocks.map((stock, index) => (
                    <li key={index} className="stock-item">
                        <span className="stock-name">{stock.name}</span>
                        <span className="stock-price">₹{stock.price.toFixed(2)}</span>
                        <span className={`stock-change ${stock.changePercent >= 0 ? 'positive' : 'negative'}`}>
                            {stock.changePercent.toFixed(2)}%
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockList;