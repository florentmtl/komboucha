import { FillButton } from './forms/FillButton.jsx';
import { useToggle } from './hooks/useToggle.js';
import { JarreSliders } from './JarreSliders.jsx';
import { useCallback, useEffect, useState } from 'react';
import { OlderJarres } from './OlderJarres.jsx';
import { JarresDisplayList } from './JarresDisplayList.jsx';

export function Jarre({ className }) {
  const [showSliders, toggleShowSliders] = useToggle(false);
  const [sucre, setSucre] = useState('200');
  const [theVert, setTheVert] = useState('2');
  const [theNoir, setTheNoir] = useState('5');
  const [date, setDate] = useState(new Date());
  const [jarres, setJarres] = useState({});

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
        }
      });
  }, []);

  const sendJarre = useCallback(() => {
    fetch('http://localhost:4000/jarres', {
      method: 'POST',
      body: JSON.stringify({
        sucre: sucre,
        theVert: theVert,
        theNoir: theNoir,
        date: date,
        finished: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }, [sucre, theNoir, theVert, date]);

  const deleteJarre = useCallback(
    (id) => {
      fetch('http://localhost:4000/jarres/del', {
        method: 'POST',
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
      fetchJarre();
    },
    [fetchJarre],
  );

  const markAsFinished = useCallback(
    (id) => {
      fetch('http://localhost:4000/jarres/finished/' + id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
      fetchJarre();
    },
    [fetchJarre],
  );

  const handleSubmit = useCallback(() => {
    sendJarre();
    toggleShowSliders();
    fetchJarre();
  }, [sendJarre, toggleShowSliders, fetchJarre]);

  useEffect(() => {
    fetchJarre();
  }, []);

  return (
    <div className={className}>
      <h2>Jarre</h2>
      {jarres.length > 0 && (
        <JarresDisplayList
          jarres={jarres.filter((item) => !item.finished)}
          onDelete={deleteJarre}
          markAsFinished={markAsFinished}
        />
      )}
      {showSliders && (
        <JarreSliders
          sucre={sucre}
          setSucre={setSucre}
          theVert={theVert}
          setTheVert={setTheVert}
          theNoir={theNoir}
          setTheNoir={setTheNoir}
          date={date}
          setDate={setDate}
        />
      )}
      <FillButton
        className="mb-3 mx-auto"
        showSliders={showSliders}
        onToggle={toggleShowSliders}
        onSubmit={handleSubmit}
      />
      <OlderJarres className="mb-3" jarres={jarres} onDelete={deleteJarre} markAsFinished={markAsFinished} />
    </div>
  );
}
