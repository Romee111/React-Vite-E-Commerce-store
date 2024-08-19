import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SalesMetrics({ averageSalesPeriod }) {
  const [products, setProducts] = useState([]);
  const [metricsData, setMetricsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await   
          axios.get('http://localhost:2900/product/getAllProducts');
        setProducts(response.data.data);

         // Calculate metrics from fetched products
        const totalProducts = response.data.data.length;
        // ... other metric calculations ...
        setMetricsData({ totalProducts, ... metricsData });
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [averageSalesPeriod]); // Refetch data when averageSalesPeriod changes

  // ... metric calculation functions ...

  return (
    <div>
      {loading ? (
        <div>Loading products...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : metricsData ? (
        <div className="sales-metrics-container">
          {/* Render metric cards using metricsData */}
          <div className="metric-card">
            <div className="metric-title">Total Products</div>
            <div className="metric-value">{metricsData.totalProducts}</div>
          </div>
          {/* ... other metric cards */}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default SalesMetrics;