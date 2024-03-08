export function OlderJarresList({ jarres }) {
  return (
    <div>
      <ul>
        {jarres.map((item) => (
          <li key={item.id}>
            <ul>
              <li key="sucre">Sucre : {item.sucre}</li>
              <li key="theNoir">Thé noir : {item.theNoir}</li>
              <li key="theVert">Thé vert : {item.theVert}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
