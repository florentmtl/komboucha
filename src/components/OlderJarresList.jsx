export function OlderJarresList({ jarres, onDelete }) {
  return (
    <div>
      <ul>
        {jarres.map((item) => (
          <li key={item.id}>
            Komboucha numéro {item.id}
            <button className="btn btn-secondary" onClick={() => onDelete(item.id)}>
              Supprimer
            </button>
            <ul>
              <li key="sucre">Sucre : {item.sucre} grammes</li>
              <li key="theNoir">Thé noir : {item.theNoir} sachets</li>
              <li key="theVert">Thé vert : {item.theVert} sachets</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
