import React from 'react';
import { Orders } from '../components/Orders';

const OrdersPage: React.FC = () => {
    return (
        <div>
            <h1>Open and Pending Orders</h1>
            <Orders />
        </div>
    );
};

export default OrdersPage;