import { JarreDisplay } from './JarreDisplay';

export default function JarresDisplayList({ jarres, onDelete, markAsFinished }) {
  console.log('JarreDisplayList');

  return (
    <div>
      <ul>
        {jarres.map((item) => (
          <li key={item.id}>
            <JarreDisplay jarre={item} onDelete={onDelete} markAsFinished={markAsFinished} />
          </li>
        ))}
      </ul>
    </div>
  );
}
