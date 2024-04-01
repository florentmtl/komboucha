import { JarreDisplay } from "./JarreDisplay";

export function OlderJarresList({ jarres, onDelete, markAsFinished }) {
  return (
    <div>
      <ul>
        {jarres.map((item) => (
          <li key={item.id}>
            <JarreDisplay jarre={item} onDelete={onDelete} markAsFinished={markAsFinished}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
