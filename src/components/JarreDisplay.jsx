export function JarreDisplay({ className, jarre, onDelete, markAsFinished }) {

  if (jarre) {
    return (
      <div className={className}>
        <div className="container-fluid">
          <div className="row row-cols-auto">
            <div className="col">Kombucha numéro {jarre.id}</div>
            <div className="col">
              <button className="btn btn-secondary" onClick={() => onDelete(jarre.id)}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
        <div>Sucre : {jarre.sucre} grammes</div>
        <div>Thé noir : {jarre.theNoir} sachets</div>
        <div>Thé vert : {jarre.theVert} sachets</div>
        <div>Date : {new Date(jarre.date).toDateString()}</div>
        <div>
          Terminée : {jarre.finished ? 'oui' : 'non'}
          <button className="btn btn-secondary" onClick={() => markAsFinished(jarre.id)}>
            Terminer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h4>Pas de données</h4>
    </div>
  );
}
