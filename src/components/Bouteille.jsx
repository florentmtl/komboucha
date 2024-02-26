import { FillButton } from './forms/FillButton.jsx';
import { useToggle } from './hooks/useToggle.js';
import { BouteilleSliders } from './BouteilleSliders.jsx';
import { BouteilleStatut } from './BouteilleStatut.jsx';

export function Bouteille({ className, number }) {
  const [showSliders, toggleShowSliders] = useToggle(false);

  return (
    <div className={className}>
      <h3>Bouteille {number}</h3>
      <BouteilleStatut />
      {showSliders && <BouteilleSliders />}
      <FillButton showSliders={showSliders} onToggle={toggleShowSliders} />
    </div>
  );
}
