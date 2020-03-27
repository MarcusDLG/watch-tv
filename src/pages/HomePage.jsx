import React, { useState, useEffect } from 'react'
import TvShow from '../components/TvShow'
import axios from 'axios'
// import Featured from '../components/Featured'
// import ShowDetails from '../pages/ShowDetails'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const HomePage = (props) => {
  const [tvShows, setTvShows] = useState([])
  const [featuredShow, setFeaturedShow] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?&sort_by=popularity&api_key=bacaaf4eaf8460f869017fcbe5649411&language=en-US&page=1'
    )
    setTvShows(resp.data.results)
    // console.log(resp.data.results)
    const randomIndex = Math.floor(Math.random() * 20)
    setFeaturedShow(resp.data.results[randomIndex])
  }

  useEffect(() => {
    getAllShows()
  }, [])
  return (
    <>
      <h1>TV Shows!</h1>
      <section className="featured">
        <li className="">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${featuredShow.poster_path}`}
            alt={featuredShow.name}
          ></img>
          <p>{featuredShow.overview}</p>
          <Link to={`/tv/${featuredShow.id}`}>{featuredShow.name}</Link>
        </li>
      </section>
      <main>
        <ul>
          {tvShows.map((show) => {
            return (
              <TvShow
                key={show.id}
                id={show.id}
                name={show.name}
                image={show.poster_path}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
