import MovieItem from './MovieItem'
import movieData from '../data/moviesByGenreId_28.json'

const MovieList = () => {
  return (
    <div class="container">
      <MovieItem movie={movieData[0]} />
      <MovieItem movie={movieData[1]} />
      <MovieItem movie={movieData[2]} />
      <MovieItem movie={movieData[3]} />
      <MovieItem movie={movieData[4]} />
      <MovieItem movie={movieData[5]} />
      <MovieItem movie={movieData[6]} />
      <MovieItem movie={movieData[7]} />

      {/* {
        movieData.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))
      } */}
    </div>
  )
}

export default MovieList
