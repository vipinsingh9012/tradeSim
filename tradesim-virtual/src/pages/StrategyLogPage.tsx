import React from 'react';
import { useEffect, useState } from 'react';
import StrategyLog from '../components/StrategyLog';
import { fetchStrategyLog } from '../services/api';

const StrategyLogPage: React.FC = () => {
    const [logData, setLogData] = useState([]);

    useEffect(() => {
        const getLogData = async () => {
            const data = await fetchStrategyLog();
            setLogData(data);
        };

        getLogData();
    }, []);

    return (
        <div className="strategy-log-page">
            <h1>Strategy Log</h1>
            <StrategyLog logData={logData} />
        </div>
    );
};

export default StrategyLogPage;