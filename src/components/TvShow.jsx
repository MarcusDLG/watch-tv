import React from 'react'

const TvShow = (props) => {
  const { name, popularity, country, image, overview } = props
  return (
    <li>
      <section className="showCard">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`}
          alt={name}
        ></img>
        <section className="showDescription">
          <h2>{name}</h2>
          <p>{overview}</p>
          <p>
            <strong>Popularity: </strong>
            {popularity}
          </p>
          <p>
            <strong>Country of Origin:</strong> {country}
          </p>
        </section>
      </section>
    </li>
  )
}

export default TvShow
