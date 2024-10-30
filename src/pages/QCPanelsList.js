import React, { useEffect, useState } from 'react';
import { getQCPanelData } from '../services/api';

function QCPanelsList() {
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    const fetchPanels = async () => {
      try {
        const data = await getQCPanelData();
        setPanels(data);
      } catch (error) {
        console.error('Error fetching QC panels:', error);
      }
    };

    fetchPanels();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">List of QC Panels</h2>
      <ul className="mt-4">
        {panels.map((panel, index) => (
          <li key={index} className="mb-2 p-4 border border-gray-300 rounded-md">
            <strong>{panel.panelName}</strong>: {panel.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QCPanelsList;
