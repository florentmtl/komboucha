export function JarreStatut({ currentJarre }) {
  if (currentJarre) {
    return (
      <div>
        <div>Sucre : {currentJarre.sucre} grammes</div>
        <div>Thé noir : {currentJarre.theNoir} sachets</div>
        <div>Thé vert : {currentJarre.theVert} sachets</div>
      </div>
    );
  }

  return (
    <div>
      <h4>Pas de données</h4>
    </div>
  );
}
