import React from 'react';
import { useSelector } from 'react-redux';
import PortfolioPieChart from '../components/PortfolioPieChart';

const PortfolioPage = () => {
    const portfolio = useSelector(state => state.portfolio);
    const totalInvested = portfolio.reduce((total, stock) => total + stock.investedAmount, 0);
    const currentValue = portfolio.reduce((total, stock) => total + stock.currentValue, 0);
    const profitLoss = currentValue - totalInvested;

    return (
        <div className="portfolio-page">
            <h1>Your Portfolio</h1>
            <div className="portfolio-summary">
                <p>Total Invested: ₹{totalInvested.toLocaleString()}</p>
                <p>Current Value: ₹{currentValue.toLocaleString()}</p>
                <p>Profit/Loss: ₹{profitLoss.toLocaleString()}</p>
            </div>
            <PortfolioPieChart portfolio={portfolio} />
            <div className="portfolio-details">
                <h2>Holdings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stock Name</th>
                            <th>Quantity</th>
                            <th>Invested Amount</th>
                            <th>Current Value</th>
                            <th>Profit/Loss</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolio.map(stock => (
                            <tr key={stock.name}>
                                <td>{stock.name}</td>
                                <td>{stock.quantity}</td>
                                <td>₹{stock.investedAmount.toLocaleString()}</td>
                                <td>₹{stock.currentValue.toLocaleString()}</td>
                                <td>₹{(stock.currentValue - stock.investedAmount).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PortfolioPage;