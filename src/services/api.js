import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

// Function to send QC panel data
export const sendQCPanelData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/qc-panel`, data);
    return response.data;
  } catch (error) {
    console.error('Error sending QC panel data:', error);
    throw error;
  }
};

// Function to get QC panel data
export const getQCPanelData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/qc-panel`);
    return response.data;
  } catch (error) {
    console.error('Error fetching QC panel data:', error);
    throw error;
  }
};
