import { useToggle } from './hooks/useToggle.js';
import { OlderJarresList } from './OlderJarresList.jsx';

export function OlderJarres({ className, jarres, onDelete }) {
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
        <OlderJarresList jarres={jarres.slice(-Math.min(5, jarres.length + 1), -1).reverse()} onDelete={onDelete} />
      )}
    </div>
  );
}
