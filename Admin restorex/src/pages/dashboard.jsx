import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const salesData = [
  { name: 'Jan', Sales: 4000, Orders: 2400, Revenue: 2400 },
  { name: 'Feb', Sales: 3000, Orders: 1398, Revenue: 2210 },
  { name: 'Mar', Sales: 2000, Orders: 9800, Revenue: 2290 },
  { name: 'Apr', Sales: 2780, Orders: 3908, Revenue: 2000 },
  { name: 'May', Sales: 1890, Orders: 4800, Revenue: 2181 },
  { name: 'Jun', Sales: 2390, Orders: 3800, Revenue: 2500 },
  { name: 'Jul', Sales: 3490, Orders: 4300, Revenue: 2100 },
];

const pieData = [
  { name: 'Electronics', value: 400 },
  { name: 'Fashion', value: 300 },
  { name: 'Home', value: 300 },
  { name: 'Books', value: 200 },
];

const topSellingData = [
  { name: 'Product A', Sales: 2400 },
  { name: 'Product B', Sales: 1398 },
  { name: 'Product C', Sales: 9800 },
  { name: 'Product D', Sales: 3908 },
];

const refundReturnData = [
  { name: 'Electronics', Returns: 50, Refunds: 20 },
  { name: 'Fashion', Returns: 30, Refunds: 10 },
  { name: 'Home', Returns: 20, Refunds: 5 },
  { name: 'Books', Returns: 10, Refunds: 2 },
];

const promotionData = [
  { name: 'Summer Sale', Revenue: 5000 },
  { name: 'Black Friday', Revenue: 8000 },
  { name: 'Holiday Deals', Revenue: 6000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className="col-md-9">
        <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        
        {/* Sales Overview Line Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Sales Overview</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Orders Bar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Orders Overview</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Orders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Revenue Pie Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Revenue Breakdown</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Customer Demographics Pie Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Customer Demographics</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: '18-24', value: 2400 },
                    { name: '25-34', value: 4567 },
                    { name: '35-44', value: 1398 },
                    { name: '45-54', value: 980 },
                    { name: '55-64', value: 3908 },
                    { name: '65+', value: 4800 },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Traffic Sources Bar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Traffic Sources</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { name: 'Google', Traffic: 4000 },
                { name: 'Facebook', Traffic: 3000 },
                { name: 'Direct', Traffic: 2000 },
                { name: 'Referral', Traffic: 2780 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Traffic" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Inventory Levels Bar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Inventory Levels</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { name: 'Electronics', Stock: 100 },
                { name: 'Fashion', Stock: 80 },
                { name: 'Home', Stock: 50 },
                { name: 'Books', Stock: 30 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Stock" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Top-Selling Products Bar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Top-Selling Products</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topSellingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sales" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Refund and Return Rates Bar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Refund and Return Rates</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={refundReturnData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Returns" stackId="a" fill="#8884d8" />
                <Bar dataKey="Refunds" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Promotion Performance Bar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Promotion Performance</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={promotionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

      </Grid>
    </Box>
    </div>
  );
};

export default Dashboard;
