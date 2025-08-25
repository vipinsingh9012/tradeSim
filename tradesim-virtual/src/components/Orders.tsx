import React from 'react';

const Orders: React.FC = () => {
    const [orders, setOrders] = React.useState<any[]>([]);

    React.useEffect(() => {
        // Fetch open and pending orders from the API
        const fetchOrders = async () => {
            // Replace with actual API call
            const response = await fetch('/api/orders');
            const data = await response.json();
            setOrders(data);
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders-container">
            <h2>Open and Pending Orders</h2>
            {orders.length === 0 ? (
                <p>No open or pending orders.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Stock Name</th>
                            <th>Action</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.stockName}</td>
                                <td>{order.action}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Orders;