import { widget } from 'tradingview-widget';

export const createTradingViewWidget = (symbol: string, containerId: string) => {
    const widgetOptions = {
        symbol: symbol,
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: containerId,
        studies: ['MACD', 'RSI'],
        hide_side_toolbar: false,
        withdateranges: true,
        range: '1M',
        autosize: true,
    };

    new widget(widgetOptions);
};