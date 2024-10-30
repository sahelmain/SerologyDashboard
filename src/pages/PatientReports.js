import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PatientReports() {
  const [patientName, setPatientName] = useState('');
  const [testResults, setTestResults] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/patient-reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientName, testResults }),
      });
      if (response.ok) {
        console.log('Patient Report submitted successfully');
        setPatientName('');
        setTestResults('');
      } else {
        console.error('Failed to submit patient report');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">Patient Reports</h2>
      <p className="mt-4">Enter details about the patient and their test results below:</p>

      <form onSubmit={handleFormSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
            Patient Name
          </label>
          <input
            type="text"
            id="patientName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="testResults" className="block text-sm font-medium text-gray-700">
            Test Results
          </label>
          <textarea
            id="testResults"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={testResults}
            onChange={(e) => setTestResults(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Submit Patient Report
        </button>
      </form>
      <Link to="/patient-reports-list" className="mt-4 inline-block text-blue-500">
        View All Patient Reports
      </Link>
    </div>
  );
}

export default PatientReports;
