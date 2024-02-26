export function FillButton({ showSliders, onToggle, onSubmit }) {
  if (showSliders) {
    return (
      <div>
        <button onClick={onToggle}>Annuler</button>
        <button onClick={onSubmit}>Confirmer</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={onToggle}>Nouveau remplissage</button>
      </div>
    );
  }
}
