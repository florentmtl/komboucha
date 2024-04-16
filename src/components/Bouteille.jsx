import { FillButton } from './forms/FillButton.jsx';
import { useToggle } from './hooks/useToggle.js';
import { BouteilleStatut } from './BouteilleStatut.jsx';
import { useState } from 'react';
import { ListOfIngredients } from './ListOfIngredients.jsx';
import { ChoixDansLaDate } from './forms/ChoixDansLaDate.jsx';

export function Bouteille({ className, number }) {
  console.log('Bouteille');
  const [showIngredients, toggleShowIngredients] = useToggle(false);
  //use a set instead of a list to have unique ingredients
  const [ingredients, setIngredients] = useState([]);
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {};

  return (
    <div className={className}>
      <h3>Bouteille {number}</h3>
      <BouteilleStatut />
      {showIngredients ? (
        <div>
          <ListOfIngredients ingredients={ingredients} setIngredients={setIngredients} />
          <ChoixDansLaDate date={date} setDate={setDate} />
        </div>
      ) : (
        <div></div>
      )}
      <FillButton showSliders={showIngredients} onToggle={toggleShowIngredients} onSubmit={handleSubmit} />
    </div>
  );
}
