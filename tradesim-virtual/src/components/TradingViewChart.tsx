import React from 'react';
import { widget } from 'tradingview-widget';

interface TradingViewChartProps {
    symbol: string;
    interval?: string;
    theme?: string;
    width?: string | number;
    height?: string | number;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ symbol, interval = '1D', theme = 'dark', width = '100%', height = '400' }) => {
    React.useEffect(() => {
        const chartWidget = widget({
            container_id: 'tradingview-chart',
            symbol: symbol,
            interval: interval,
            timezone: 'exchange',
            theme: theme,
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            details: true,
            hotlist: true,
            calendar: true,
            news: ['stocktwits'],
            width: width,
            height: height,
        });

        return () => {
            if (chartWidget) {
                chartWidget.remove();
            }
        };
    }, [symbol, interval, theme, width, height]);

    return <div id="tradingview-chart" style={{ width: '100%', height: '100%' }} />;
};

export default TradingViewChart;