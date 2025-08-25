export interface Stock {
    name: string;
    price: number;
    changePercent: number;
}

export interface Trade {
    stockName: string;
    action: 'buy' | 'sell';
    quantity: number;
    price: number;
    time: Date;
    profitLoss: number;
}

export interface Portfolio {
    holdings: Record<string, number>; // stock name to quantity
    investedAmount: number;
    currentValue: number;
    profitLoss: number;
}

export interface StrategyLogEntry {
    stockName: string;
    action: 'buy' | 'sell';
    quantity: number;
    price: number;
    time: Date;
    profitLoss: number;
}

export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    source: string;
    publishedAt: Date;
}