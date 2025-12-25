
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { NewProduct } from './pages/NewProduct';
import { History } from './pages/History';
import { CostCalculator } from './pages/CostCalculator';
import { Settings } from './pages/Settings';
import { NewQuote } from './pages/NewQuote';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/history" element={<History />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/new-quote" element={<NewQuote />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
