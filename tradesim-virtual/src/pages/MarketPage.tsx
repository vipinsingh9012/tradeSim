import React, { useEffect, useState } from 'react';
import StockList from '../components/StockList';
import FilterBar from '../components/FilterBar';
import { fetchStockData } from '../services/api';

const MarketPage = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadStockData = async () => {
            try {
                const data = await fetchStockData();
                setStocks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadStockData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="market-page">
            <h1>Market Page</h1>
            <FilterBar />
            <StockList stocks={stocks} />
        </div>
    );
};

export default MarketPage;