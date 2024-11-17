// src/pages/Actors.js
import { useEffect, useState } from 'react';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/actors')
      .then(response => response.json())
      .then(data => setActors(data));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
