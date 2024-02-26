export function JarreStatut({ currentJarre }) {
  return (
    <>
      {currentJarre && (
        <div>
          <div>Sucre : {currentJarre.sucre} grammes</div>
          <div>Thé noir : {currentJarre.theNoir} sachets</div>
          <div>Thé vert : {currentJarre.theVert} sachets</div>
        </div>
      )}
    </>
  );
}
