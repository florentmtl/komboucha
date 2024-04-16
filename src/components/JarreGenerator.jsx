import { useState } from 'react';

export function JarreGenerator() {
  const [jarreToGen, setJarreToGen] = useState(1000);

  const handleSubmit = () => {
    for (let i = 0; i < jarreToGen; i++) {
      fetch('http://localhost:4000/jarres', {
        method: 'POST',
        body: JSON.stringify({
          sucre: 201,
          theVert: 2,
          theNoir: 5,
          date: new Date(),
          finished: false,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row align-items-center g-2">
      <div className="col-auto">
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
          Générer
        </button>
      </div>
      <div className="col-auto">
        <input
          className="form-control"
          type="number"
          name="jarres"
          id="jarregen"
          value={jarreToGen}
          onChange={(e) => setJarreToGen(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <label className="col-form-label" htmlFor="jarregen">
          jarres
        </label>
      </div>
    </div>
  );
}
