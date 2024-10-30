import React, { useState } from 'react';
import { sendQCPanelData } from '../services/api'; // Ensure you have this or comment out if you don’t have the API

function QCBuilder() {
  const [panelName, setPanelName] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const qcPanel = { panelName, description };

    try {
      const response = await sendQCPanelData(qcPanel);
      console.log('QC Panel created successfully:', response);

      // Set success message
      setSuccessMessage('QC Panel created successfully!');
      setErrorMessage('');

      // Clear the form
      setPanelName('');
      setDescription('');
    } catch (error) {
      console.error('Failed to create QC Panel:', error);
      // Set error message
      setErrorMessage('Failed to create QC Panel. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">Quality Control Builder</h2>
      <p className="mt-4">This section will allow faculty to create and manage quality control panels.</p>

      <form onSubmit={handleFormSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="panelName" className="block text-sm font-medium text-gray-700">
            Panel Name
          </label>
          <input
            type="text"
            id="panelName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={panelName}
            onChange={(e) => setPanelName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Create QC Panel
        </button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && <div className="text-green-600 mt-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
    </div>
  );
}

export default QCBuilder;
