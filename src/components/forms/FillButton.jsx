export function FillButton({ showSliders, onToggle, onSubmit, className }) {
  if (showSliders) {
    return (
      <div className={className}>
        <button className="btn btn-primary me-3" onClick={onToggle}>
          Annuler
        </button>
        <button className="btn btn-primary" onClick={onSubmit}>
          Confirmer
        </button>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <button className="btn btn-primary" onClick={onToggle}>
          Nouveau remplissage
        </button>
      </div>
    );
  }
}
