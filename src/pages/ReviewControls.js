// src/pages/ReviewControls.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ReviewControls() {
  const { type } = useParams();

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">Review Controls - {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <p>This section allows review of {type} data.</p>
      {/* Add functionality specific to each type here */}
    </div>
  );
}

export default ReviewControls;
