export function JarreStatut({ className, currentJarre, onDelete }) {
  if (currentJarre) {
    return (
      <div className={className}>
        <div className="container-fluid">
          <div className="row row-cols-auto">
            <div className="col">
              <h4>En cours</h4>
            </div>
            <div className="col">
              <button className="btn btn-secondary" onClick={() => onDelete(currentJarre.id)}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
        Kombucha numéro {currentJarre.id}
        <div>Sucre : {currentJarre.sucre} grammes</div>
        <div>Thé noir : {currentJarre.theNoir} sachets</div>
        <div>Thé vert : {currentJarre.theVert} sachets</div>
        <div>Date : {new Date(currentJarre.date).toDateString()}</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h4>Pas de données</h4>
    </div>
  );
}
