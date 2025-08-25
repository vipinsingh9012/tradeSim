import React, { useEffect, useState } from 'react';
import { exportToCSV } from '../utils/exportCSV';

const StrategyLog = () => {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        // Fetch trades from local storage or API
        const storedTrades = JSON.parse(localStorage.getItem('strategyLog')) || [];
        setTrades(storedTrades);
    }, []);

    const handleExport = () => {
        exportToCSV(trades);
    };

    return (
        <div className="strategy-log">
            <h2>Strategy Log</h2>
            <button onClick={handleExport}>Export to CSV</button>
            <table>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Action</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>P&L</th>
                    </tr>
                </thead>
                <tbody>
                    {trades.map((trade, index) => (
                        <tr key={index}>
                            <td>{trade.stockName}</td>
                            <td>{trade.action}</td>
                            <td>{trade.quantity}</td>
                            <td>{trade.price}</td>
                            <td>{trade.time}</td>
                            <td>{trade.pnl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StrategyLog;