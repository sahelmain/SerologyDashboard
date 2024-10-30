import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../App.css';

// Import the components
import Header from './Header';
import QCBuilder from '../pages/QCBuilder';
import PatientReports from '../pages/PatientReports';
import Login from '../pages/Login';



// Home component with links to different functionalities
function Home() {
  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">MIS Home Screen</h2>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Link to="/qc-builder" className="block bg-blue-500 text-white p-4 rounded text-center">
          Quality Control
        </Link>
        <Link to="/patient-reports" className="block bg-blue-500 text-white p-4 rounded text-center">
          Patient Reports
        </Link>
        <Link to="/order-entry" className="text-gray-300 hover:text-white">
            Order Entry
          </Link>
          <Link to="/results-in-progress" className="text-gray-300 hover:text-white">
            Results in Progress
          </Link>
          <Link to="/quizzes" className="text-gray-300 hover:text-white">
            Quizzes
          </Link>
          <Link to="/case-studies" className="text-gray-300 hover:text-white">
            Case Studies
          </Link>
          <Link to="/student-report-submissions" className="text-gray-300 hover:text-white">
            Student Report Submissions
          </Link>
          <Link to="/grade-book" className="text-gray-300 hover:text-white">
            Grade Book
          </Link>
          <Link to="/reference-files" className="text-gray-300 hover:text-white">
            Reference Files
          </Link>
        {/* Add more links for other functionalities */}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/qc-builder" element={<QCBuilder />} />
          <Route path="/patient-reports" element={<PatientReports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;