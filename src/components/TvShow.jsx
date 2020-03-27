import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const TvShow = (props) => {
  const { name, image, id } = props
  return (
    <li key={id}>
      <section className="showCard">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`}
          alt={name}
        ></img>
        <section className="">
          <Link to={`/tv/${id}`}>{name}</Link>
        </section>
      </section>
    </li>
  )
}

export default TvShow
