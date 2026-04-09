import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [patientData, setPatientData] = useState({
    name: '',
    id: '',
    familySupport: false
  });

  const handleInitiateTreatment = async () => {
    try {
      // Ensure the port matches the Backend (5000)
      const response = await axios.post('http://localhost:5000/holistic-treatment', {
        name: patientData.name,
        patientId: patientData.id,
        familySupportStatus: patientData.familySupport,
        keyOfHoliness: "1964_LASAGNA_TUFTS" // The Essential Vow
      });

      alert(`Covenant Fulfilled: ${response.data.message}`);
    } catch (error) {
      // Catching "Harm and Injustice"
      const errorMsg = error.response ? error.response.data : "The House is compromised.";
      alert(`Error: ${errorMsg}`);
    }
  };

  return (
    <div className="App" style={{ padding: '40px', fontFamily: 'serif' }}>
      <h1>Hippocratic Registry: SARS-CoV-2</h1>
      <p><i>"In purity and holiness I will guard my life and my art."</i></p>
      <hr />
      
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto', gap: '10px' }}>
        <input 
          placeholder="Patient Full Name" 
          onChange={(e) => setPatientData({...patientData, name: e.target.value})} 
        />
        <input 
          placeholder="Clinical Patient ID" 
          onChange={(e) => setPatientData({...patientData, id: e.target.value})} 
        />
        <label>
          Family Support: 
          <input 
            type="checkbox" 
            onChange={(e) => setPatientData({...patientData, familySupport: e.target.checked})} 
          />
        </label>
        <button onClick={handleInitiateTreatment} style={{ cursor: 'pointer', padding: '10px' }}>
          Apply Sacred Treatment
        </button>
      </div>
    </div>
  );
}

export default App;