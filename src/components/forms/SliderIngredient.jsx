import { useId } from 'react';

/**
 *
 * @param {string} id
 * @param {string} nom
 * @param {number} min
 * @param {number} max
 * @returns {JSX.Element}
 * @constructor
 */
export function SliderIngredient({ nom, value, setValue, unite, min, max }) {
  const handleSlide = (e) => {
    setValue(e.target.value);
  };

  const id = useId();

  return (
    <div>
      <input id={id} type="range" className="form-range" min={min} max={max} value={value} onChange={handleSlide} />
      <label htmlFor={id} className="form-label">
        {nom} : {value} {unite}
      </label>
    </div>
  );
}
