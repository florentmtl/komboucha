import { useToggle } from './hooks/useToggle.js';
import { lazy } from 'react';

export function OlderJarres({ className, jarres, onDelete, markAsFinished }) {
  console.log('OlderJarres');
  const [displayOldJarres, toggleDisplayOldJarres] = useToggle(false);

  if (jarres.length < 1) {
    return <div className={className}></div>;
  }

  //const JarresDisplayListLazy = lazy(() => import('./JarresDisplayList.jsx'));

  return (
    <div className={className}>
      <button className="btn btn-primary mb-3" onClick={toggleDisplayOldJarres}>
        {displayOldJarres ? 'Cacher anciennes jarres' : 'Anciennes jarres'}
      </button>
      {displayOldJarres && (
        <div></div>
        //       <JarresDisplayListLazy
        //       jarres={jarres.filter((jarre) => jarre.finished).reverse()}
        //     onDelete={onDelete}
        //   markAsFinished={markAsFinished}
        //    />
      )}
    </div>
  );
}
