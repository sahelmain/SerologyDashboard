// src/pages/QualityControls.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function QualityControls() {
  const navigate = useNavigate();

  // Function to handle dropdown selection
  const handleDropdownChange = (event, controlType) => {
    const selectedValue = event.target.value;

    // Check if a valid option is selected
    if (selectedValue && selectedValue !== "Choose an item") {
      navigate(`/${controlType}/${selectedValue.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5 relative">
      {/* Top Navigation with Back, Home, and Logout */}
      <div className="flex justify-between items-center">
        {/* Back Button in Top Left */}
        <button onClick={() => navigate(-1)} className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
          Back
        </button>

        {/* Serology Diagnostics Dashboard Header */}
        <h2 className="text-3xl font-bold mb-4 p-4 bg-blue-500 text-white rounded-md flex-grow text-center">
          Serology Diagnostics Dashboard
        </h2>

        {/* Home and Logout Buttons in Top Right */}
        <div className="flex space-x-4">
          <Link to="/home" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Home
          </Link>
          <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </Link>
        </div>
      </div>

      {/* Quality Controls Header */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-4 p-4 bg-blue-500 text-white rounded-md">
          Quality Controls
        </h2>
        <div className="mt-4 p-2 border rounded-md shadow-md text-gray-800">
          Note: For Order QC and Review QC, the faculty will have the same access as the student view.
        </div>
      </div>

      {/* Dropdown menus */}
      <div className="grid grid-cols-3 gap-8 mt-10">
        {/* Order Controls Dropdown */}
        <div className="bg-blue-500 text-white rounded-md p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-3">Order Controls</h3>
          <select
            className="w-full p-2 border rounded-md text-black"
            onChange={(e) => handleDropdownChange(e, "order-controls")}
          >
            <option>Choose an item</option>
            <option>Chemistry</option>
            <option>Hematology/Coag</option>
            <option>Microbiology</option>
            <option>Serology</option>
            <option>UA/Body Fluids</option>
            <option>Blood Bank</option>
            <option>Molecular</option>
          </select>
        </div>

        {/* Review Controls Dropdown */}
        <div className="bg-blue-500 text-white rounded-md p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-3">Review Controls</h3>
          <select
            className="w-full p-2 border rounded-md text-black"
            onChange={(e) => handleDropdownChange(e, "review-controls")}
          >
            <option>Choose an item</option>
            <option>Chemistry</option>
            <option>Hematology/Coag</option>
            <option>Microbiology</option>
            <option>Serology</option>
            <option>UA/Body Fluids</option>
            <option>Blood Bank</option>
            <option>Molecular</option>
          </select>
        </div>

        {/* QC Builder Dropdown */}
        <div className="bg-blue-500 text-white rounded-md p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-3">QC Builder</h3>
          <select
            className="w-full p-2 border rounded-md text-black"
            onChange={(e) => handleDropdownChange(e, "qc-builder")}
          >
            <option>Choose an item</option>
            <option>Chemistry</option>
            <option>Hematology/Coag</option>
            <option>Microbiology</option>
            <option>Serology</option>
            <option>UA/Body Fluids</option>
            <option>Blood Bank</option>
            <option>Molecular</option>
          </select>
        </div>
      </div>

      {/* Note about QC Builder */}
      <div className="mt-8 p-2 border rounded-md shadow-md text-gray-800">
        Note: For QC Builder, Faculty selects the lab department from a drop-down menu. For now, QC Builder is for Faculty View only.
      </div>
    </div>
  );
}

export default QualityControls;
