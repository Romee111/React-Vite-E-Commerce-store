import React, { useState } from 'react';
import '../styling/ordertrack.css';

const OrderTrack = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);



  // Simulated tracking data
  const sampleTrackingData = {
    '123456': {
      status: 'Shipped',
      estimatedDelivery: '2024-09-15',
      carrier: 'FedEx',
      senderName: 'John Smith',
      receiverName: 'Jane Doe',
      trackingURL: 'https://www.fedex.com/track?tracknumbers=123456'
    },
    '654321': {
      status: 'In Transit',
      estimatedDelivery: '2024-09-20',
      carrier: 'UPS',
      senderName: 'Alice Johnson',
      receiverName: 'Bob Brown',
      trackingURL: 'https://www.ups.com/track?tracknum=654321'
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate fetching tracking information
    const data = sampleTrackingData[orderNumber] || null;
    setTrackingInfo(data);
  };

  return (
    <div className="trackorder-container">
      <h2>Order Tracking</h2>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className=" d-flex" style={{textAlign: 'center'}}>
          <label htmlFor="orderNumber" className="form-label-order">Enter Tracking Number Here:</label>
          <input
            type="text"
            className="form-control-order"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Order Number"
          />
        </div>
        <button type="submit" className="track-click">Track Order</button>
      </form>

      {trackingInfo && (
        <div className="mt-4">
          <h3>Tracking Information</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Status</th>
                <th>Estimated Delivery</th>
                <th>Carrier</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Tracking URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{trackingInfo.status}</td>
                <td>{trackingInfo.estimatedDelivery}</td>
                <td>{trackingInfo.carrier}</td>
                <td>{trackingInfo.senderName}</td>
                <td>{trackingInfo.receiverName}</td>
                <td>
                  <a href={trackingInfo.trackingURL} target="_blank" rel="noopener noreferrer">Track Here</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderTrack;
