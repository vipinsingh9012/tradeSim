import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import PortfolioPage from './pages/PortfolioPage';
import StrategyLogPage from './pages/StrategyLogPage';
import OrdersPage from './pages/OrdersPage';
import NewsPage from './pages/NewsPage';
import NavBar from './components/NavBar';
import './theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/market" component={MarketPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/strategy-log" component={StrategyLogPage} />
          <Route path="/orders" component={OrdersPage} />
          <Route path="/news" component={NewsPage} />
        </Switch>
        <NavBar />
      </div>
    </Router>
  );
};

export default App;