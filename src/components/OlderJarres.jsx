import { useToggle } from './hooks/useToggle.js';
import { OlderJarresList } from './OlderJarresList.jsx';

export function OlderJarres({ jarres, onDelete }) {
  const [displayOldJarres, toggleDisplayOldJarres] = useToggle(false);

  if (jarres.length < 1) {
    return <div></div>;
  }

  return (
    <div>
      <button onClick={toggleDisplayOldJarres}>
        {displayOldJarres ? 'Cacher anciennes jarres' : 'Anciennes jarres'}
      </button>
      {displayOldJarres && (
        <OlderJarresList jarres={jarres.slice(-Math.min(5, jarres.length + 1), -1).reverse()} onDelete={onDelete} />
      )}
    </div>
  );
}
