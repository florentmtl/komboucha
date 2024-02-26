import { FillButton } from './forms/FillButton.jsx';
import { useToggle } from './hooks/useToggle.js';
import { JarreSliders } from './JarreSliders.jsx';
import { JarreStatut } from './JarreStatut.jsx';
import { useState } from 'react';

export function Jarre({ className }) {
  const [showSliders, toggleShowSliders] = useToggle(false);
  const [sendData, setSendData] = useState(false);

  const handleSubmit = () => {
    setSendData(true);
  };

  return (
    <div className={className}>
      <h2>Jarre</h2>
      <JarreStatut sendData={sendData} />
      {showSliders && (
        <JarreSliders sendData={sendData} setSendData={setSendData} toggleShowSliders={toggleShowSliders} />
      )}
      <FillButton showSliders={showSliders} onToggle={toggleShowSliders} onSubmit={handleSubmit} />
    </div>
  );
}
