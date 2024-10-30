import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import the components
import Header from './components/Header';
import QCBuilder from './pages/QCBuilder';
import PatientReports from './pages/PatientReports';
import Login from './pages/Login';
import OrderEntry from './pages/OrderEntry';
import ResultsInProgress from './pages/ResultsInProgress';
import Quizzes from './pages/Quizzes';
import CaseStudies from './pages/CaseStudies';
import StudentReportSubmissions from './pages/StudentReportSubmissions';
import GradeBook from './pages/GradeBook';
import ReferenceFiles from './pages/ReferenceFiles';
import QualityControls from './pages/QualityControls';

// Home component with links to different functionalities
function Home() {
return (
<div className="container mx-auto mt-10 p-5">
<h2 className="text-xl font-bold">MIS Home Screen</h2>
<div className="grid grid-cols-2 gap-4 mt-6">
<Link to="/quality-controls" className="block bg-blue-500 text-white p-4 rounded text-center">
Quality Control
</Link>
<Link to="/patient-reports" className="block bg-blue-500 text-white p-4 rounded text-center">
Patient Reports
</Link>
<Link to="/order-entry" className="block bg-blue-500 text-white p-4 rounded text-center">
Order Entry
</Link>
<Link to="/results-in-progress" className="block bg-blue-500 text-white p-4 rounded text-center">
Results in Progress
</Link>
<Link to="/quizzes" className="block bg-blue-500 text-white p-4 rounded text-center">
Quizzes
</Link>
<Link to="/case-studies" className="block bg-blue-500 text-white p-4 rounded text-center">
Case Studies
</Link>
<Link to="/student-report-submissions" className="block bg-blue-500 text-white p-4 rounded text-center">
Student Report Submissions
</Link>
<Link to="/grade-book" className="block bg-blue-500 text-white p-4 rounded text-center">
Grade Book
</Link>
<Link to="/reference-files" className="block bg-blue-500 text-white p-4 rounded text-center">
Reference Files
</Link>
<Link to="/" className="block bg-red-500 text-white p-4 rounded text-center">
Logout
</Link>
</div>
</div>
);
}

function App() {
return (
<BrowserRouter>
<div className="App">
<Header />
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/qc-builder" element={<QCBuilder />} />
<Route path="/patient-reports" element={<PatientReports />} />
<Route path="/order-entry" element={<OrderEntry />} />
<Route path="/results-in-progress" element={<ResultsInProgress />} />
<Route path="/quizzes" element={<Quizzes />} />
<Route path="/case-studies" element={<CaseStudies />} />
<Route path="/student-report-submissions" element={<StudentReportSubmissions />} />
<Route path="/grade-book" element={<GradeBook />} />
<Route path="/reference-files" element={<ReferenceFiles />} />
<Route path="/quality-controls" element={<QualityControls />} />
</Routes>
</div>
</BrowserRouter>
);
}

export default App;
