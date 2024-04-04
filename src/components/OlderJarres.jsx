import { useToggle } from './hooks/useToggle.js';
import { JarresDisplayList } from './JarresDisplayList.jsx';

export function OlderJarres({ className, jarres, onDelete, markAsFinished }) {
  const [displayOldJarres, toggleDisplayOldJarres] = useToggle(false);

  if (jarres.length < 1) {
    return <div className={className}></div>;
  }

  return (
    <div className={className}>
      <button className="btn btn-primary mb-3" onClick={toggleDisplayOldJarres}>
        {displayOldJarres ? 'Cacher anciennes jarres' : 'Anciennes jarres'}
      </button>
      {displayOldJarres && (
        <JarresDisplayList jarres={jarres.filter((jarre) => jarre.finished).reverse()} onDelete={onDelete} markAsFinished={markAsFinished} />
      )}
    </div>
  );
}
