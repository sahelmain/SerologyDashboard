// src/pages/OrderControls.js
import React from 'react';
import { useParams } from 'react-router-dom';

function OrderControls() {
  const { type } = useParams();

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">Order Controls - {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <p>This section allows management of {type} orders.</p>
      {/* Add functionality specific to each type here */}
    </div>
  );
}

export default OrderControls;
