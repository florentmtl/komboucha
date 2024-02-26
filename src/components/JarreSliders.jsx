import { SliderIngredient } from './forms/SliderIngredient.jsx';
import { useEffect, useState } from 'react';

export function JarreSliders({ sendData, setSendData, toggleShowSliders }) {
  const [sucre, setSucre] = useState('200');
  const [theVert, setTheVert] = useState('2');
  const [theNoir, setTheNoir] = useState('5');

  useEffect(() => {
    if (sendData) {
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
      setSendData(false);
      toggleShowSliders();
    }
  }, [sendData]);

  return (
    <div>
      <SliderIngredient
        id="sucre-jarre"
        nom="Sucre"
        value={sucre}
        setValue={setSucre}
        unite="grammes"
        min="0"
        max="300"
      />
      <SliderIngredient
        id="the-vert"
        nom="Thé vert"
        value={theVert}
        setValue={setTheVert}
        unite="sachets"
        min="0"
        max="8"
      />
      <SliderIngredient id="the-noir" nom="Thé noir" value={theNoir} setValue={setTheNoir} min="0" max="8" />
    </div>
  );
}
