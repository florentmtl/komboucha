import { FillButton } from './forms/FillButton.jsx';
import { useToggle } from './hooks/useToggle.js';
import { JarreSliders } from './JarreSliders.jsx';
import { JarreStatut } from './JarreStatut.jsx';
import { useCallback, useEffect, useState } from 'react';
import { OlderJarres } from './OlderJarres.jsx';

export function Jarre({ className }) {
  const [showSliders, toggleShowSliders] = useToggle(false);
  const [sucre, setSucre] = useState('200');
  const [theVert, setTheVert] = useState('2');
  const [theNoir, setTheNoir] = useState('5');
  const [currentJarre, setCurrentJarre] = useState({});
  const [jarres, setJarres] = useState({});
  const [jarreId, setJarreId] = useState(0);

  const fetchJarre = useCallback(() => {
    fetch('http://localhost:4000/jarres', {
      headers: {
        Accept: 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setJarres(data);
          setCurrentJarre(data.at(-1));
        }
      });
  }, []);

  const sendJarre = useCallback(() => {
    fetch('http://localhost:4000/jarres', {
      method: 'POST',
      body: JSON.stringify({
        id: jarreId,
        sucre: sucre,
        theVert: theVert,
        theNoir: theNoir,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }, [sucre, theNoir, theVert, jarreId]);

  const handleSubmit = useCallback(() => {
    sendJarre();
    setJarreId((v) => v + 1);
    toggleShowSliders();
    fetchJarre();
  }, [sendJarre, toggleShowSliders, fetchJarre]);

  useEffect(() => {
    fetchJarre();
    setJarreId(jarres.length ? jarres.length : 0);
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
      <OlderJarres jarres={jarres} />
    </div>
  );
}
