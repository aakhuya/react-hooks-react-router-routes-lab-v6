// src/pages/Movie.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
    </div>
  );
}

export default Movie;
