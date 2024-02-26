import { FillButton } from './forms/FillButton.jsx';
import { useToggle } from './hooks/useToggle.js';
import { JarreSliders } from './JarreSliders.jsx';
import { JarreStatut } from './JarreStatut.jsx';
import { useEffect, useState } from 'react';

export function Jarre({ className }) {
  const [showSliders, toggleShowSliders] = useToggle(false);
  const [sucre, setSucre] = useState('200');
  const [theVert, setTheVert] = useState('2');
  const [theNoir, setTheNoir] = useState('5');
  const [currentJarre, setCurrentJarre] = useState({});

  const fetchJarre = () => {
    fetch('http://localhost:4000/jarres', {
      headers: {
        Accept: 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCurrentJarre(data.at(-1));
        }
      });
  };

  const sendJarre = () => {
    fetch('http://localhost:4000/jarres', {
      method: 'POST',
      body: JSON.stringify({
        id: 4,
        sucre: sucre,
        theVert: theVert,
        theNoir: theNoir,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    sendJarre();
    toggleShowSliders();
    fetchJarre();
  };

  useEffect(() => {
    fetchJarre();
  }, []);

  return (
    <div className={className}>
      <h2>Jarre</h2>
      <JarreStatut currentJarre={currentJarre} />
      {showSliders && (
        <JarreSliders
          sucre={sucre}
          setSucre={setSucre}
          theVert={theVert}
          setTheVert={setTheVert}
          theNoir={theNoir}
          setTheNoir={setTheNoir}
        />
      )}
      <FillButton showSliders={showSliders} onToggle={toggleShowSliders} onSubmit={handleSubmit} />
    </div>
  );
}
