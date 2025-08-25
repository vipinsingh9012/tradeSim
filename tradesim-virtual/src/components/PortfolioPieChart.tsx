import React from 'react';
import { Pie } from 'react-chartjs-2';
import { usePortfolio } from '../hooks/usePortfolio';

const PortfolioPieChart = () => {
    const { portfolio } = usePortfolio();

    const data = {
        labels: portfolio.map(stock => stock.name),
        datasets: [
            {
                data: portfolio.map(stock => stock.value),
                backgroundColor: portfolio.map(stock => stock.color),
                hoverBackgroundColor: portfolio.map(stock => stock.hoverColor),
            },
        ],
    };

    return (
        <div>
            <h2>Portfolio Allocation</h2>
            <Pie data={data} />
        </div>
    );
};

export default PortfolioPieChart;