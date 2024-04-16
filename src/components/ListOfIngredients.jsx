import { useState, useId } from 'react';
import { useToggle } from './hooks/useToggle';

export function ListOfIngredients({ ingredients, setIngredients }) {
  const id = useId();

  const [ingredient, setIngredient] = useState('');
  const [reload, toggleReload] = useToggle(false);

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      ingredients.push(ingredient);
      setIngredients(ingredients);
      setIngredient('');
    }
  };

  const handleDelete = (item) => () => {
    ingredients.splice(ingredients.indexOf(item), 1);
    setIngredients(ingredients);
    //toggle reload of page
    toggleReload();
  };

  return (
    <div>
      <label htmlFor={id}>Ingrédient</label>
      <br />
      <input id={id} type="text" value={ingredient} onChange={handleChange} onKeyDown={handleEnter} />
      <ul>
        {ingredients.map((item) => (
          <li key={item}>
            {item}{' '}
            <button className="btn btn-secondary" onClick={handleDelete(item)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
