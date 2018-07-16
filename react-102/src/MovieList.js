
import React from 'react'

class MovieList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      movies: []
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      fetch('http://api.tvmaze.com/search/shows?q=batman')
        .then(response => response.json())
        .then(movies=>this.setState({movies, loading: false}))
        .catch(err=>console.log(err))
    }, 2000)
  }

  // renderMovies = () => {
  //   return (
  //     )
  //   )
  // }

  render() {
    return (
      <div className='movie-list'>
        {
          this.state.loading ?
          <p>Loading...</p> :
      this.state.movies.map(movie =>
        <div>
          <img src={movie.show.image.medium}/>
          <h3>{movie.show.name}</h3>
        </div>)
        }
      </div>
    )
  }
}

export default MovieList
