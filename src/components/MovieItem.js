const MovieItem = ({movie}) => {
  const { id, title, poster_path, release_date, popularity, vote_average } = movie
  const posterUrl = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="movie-card">
      <div className="movie-header">
        {/* <div className="header-icon-container"> */}
          <img src={posterUrl + poster_path} width='315px' height='367px' />
        {/* </div> */}
      </div>

      <div className="movie-content">
        <div className="movie-content-header">
          <a href="#">
            <h3 className="movie-title">{title}</h3>
          </a>
          </div>
          
        <div className="movie-info">
          <div className="info-section">
            <label>release date</label>
            <span>{release_date}</span>
          </div>

          <div className="info-section">
            <label>popularity</label>
            <span>{popularity}</span>
          </div>

          <div className="info-section">
            <label>Rating</label>
            <span>{vote_average}</span>
          </div>
        </div>
      </div>
	</div>
  )
}

export default MovieItem
