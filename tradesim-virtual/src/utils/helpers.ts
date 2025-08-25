export const formatCurrency = (amount: number): string => {
    return `₹${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const calculatePercentageChange = (oldValue: number, newValue: number): string => {
    if (oldValue === 0) return 'N/A';
    const change = ((newValue - oldValue) / oldValue) * 100;
    return change.toFixed(2) + '%';
};

export const getCurrentDateTime = (): string => {
    return new Date().toLocaleString();
};

export const isValidTradeQuantity = (quantity: number): boolean => {
    return quantity > 0 && Number.isInteger(quantity);
};