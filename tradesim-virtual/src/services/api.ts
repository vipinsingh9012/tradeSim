import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with the actual API base URL

// Fetch live stock data
export const fetchLiveStocks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/live`);
        return response.data;
    } catch (error) {
        console.error('Error fetching live stocks:', error);
        throw error;
    }
};

// Fetch stock details by symbol
export const fetchStockDetails = async (symbol) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/${symbol}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for stock ${symbol}:`, error);
        throw error;
    }
};

// Fetch market news
export const fetchMarketNews = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/news`);
        return response.data;
    } catch (error) {
        console.error('Error fetching market news:', error);
        throw error;
    }
};

// Fetch top gainers
export const fetchTopGainers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/top-gainers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching top gainers:', error);
        throw error;
    }
};

// Fetch top losers
export const fetchTopLosers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/top-losers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching top losers:', error);
        throw error;
    }
};

// Fetch most active stocks
export const fetchMostActive = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/most-active`);
        return response.data;
    } catch (error) {
        console.error('Error fetching most active stocks:', error);
        throw error;
    }
};