# TradeSim Virtual

TradeSim Virtual is a responsive virtual trading platform that allows users to trade stocks using virtual money. The application provides real-time stock market data and features a modern, dark-themed user interface suitable for both web and mobile platforms.

## Features

1. **Homepage Design**
   - Dark mode, modern & professional UI.
   - Header with App Name: "TradeSim Virtual".
   - A large button ("Start Trading") that navigates to the Market Page.

2. **Market Page**
   - Displays a live list of stocks with their Name, Price, and Change %.
   - Clickable stocks that open detailed TradingView charts in a new page.
   - Filter options for Top Gainers, Top Losers, and Most Active stocks.

3. **TradingView Integration**
   - Embedded TradingView chart widget for selected stocks.
   - Supports multiple timeframes (1m, 5m, 15m, 1h, 1d).

4. **Virtual Trading Feature**
   - Users can buy/sell stocks with virtual money starting with ₹10,00,000.
   - Real-time updates of portfolio and P&L after each trade.

5. **Strategy Log**
   - Records every trade (Buy/Sell) in a "Strategy Log" section.
   - Displays Stock Name, Buy/Sell, Quantity, Price, Time, and P&L.
   - Allows exporting the log to CSV.

6. **Portfolio Page**
   - Shows user holdings, invested amount, current value, and profit/loss.
   - Includes a Pie Chart for Portfolio Allocation.

7. **Navigation**
   - Bottom Navigation Bar with buttons for Market, Portfolio, Strategy Log, Orders, and News.
   - Each button opens the respective page.

8. **Extra Features**
   - News tab fetching stock market news from sources like Moneycontrol and ET Markets.
   - Orders tab displaying open/pending orders.
   - Responsive design for both Web and Mobile.
   - Automatic data updates without page refresh using WebSocket or API polling.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tradesim-virtual.git
   ```

2. Navigate to the project directory:
   ```
   cd tradesim-virtual
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```
The build artifacts will be stored in the `build` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.