import React, { useState, useEffect } from 'react'
import TvShow from '../components/TvShow'
import axios from 'axios'

const HomePage = (props) => {
  const [tvShows, setTvShows] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=bacaaf4eaf8460f869017fcbe5649411&language=en-US&page=1'
    )
    // console.log(resp.data.results)
    setTvShows(resp.data.results)
  }

  useEffect(() => {
    // console.log('effectively a did mount')
    getAllShows()
  })
  return (
    <>
      <h1>TV Shows!</h1>
      <main>
        <ul>
          {tvShows.map((show) => {
            return (
              <TvShow
                key={show.id}
                name={show.name}
                popularity={show.popularity}
                country={show.origin_country}
                image={show.poster_path}
                overview={show.overview}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
