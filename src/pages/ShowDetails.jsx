import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowDetailsPage = (props) => {
  const showID = props.match.params.showId
  console.log(showID)

  const [details, setDetails] = useState([])
  const [summary, setSummary] = useState({})

  const getShowDetails = async () => {
    const detailsResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=bacaaf4eaf8460f869017fcbe5649411&language=en-US`
    )
    setDetails(detailsResp.data.cast)
    console.log('details' + detailsResp)
  }

  const getShowSummary = async () => {
    console.log(showID)
    const summaryResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}?api_key=bacaaf4eaf8460f869017fcbe5649411&language=en-US&page=1`
    )
    setSummary(summaryResp.data)
    console.log(summaryResp.data)
  }

  useEffect(() => {
    getShowDetails()
    getShowSummary()
  }, [])

  return (
    <>
      <section className="showDetails">
        <h2>{summary.name}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${summary.backdrop_path}`}
          alt="Movie Poster"
        />
        <p>{summary.overview}</p>
        <p></p>
        <h2>Actors</h2>
        <ul className="actors">
          {details.map((actor) => {
            return <li>{actor.name}</li>
          })}
        </ul>
        <ul>
          <li>
            <strong>Popularity: </strong>
            {summary.popularity}
          </li>
          <li>
            <strong>Vote Average: </strong>
            {summary.vote_average}
          </li>
        </ul>
      </section>
    </>

    //         <section lassName="right-box">
    //           <p className="plot">
    //             <span style={{ color: 'white' }}>Plot: {` `}</span>
    //             {summary.overview}
    //           </p>
    //           <p className="popularity">
    //             <span style={{ color: 'white' }}>Popularity: </span>

    //             {summary.popularity}
    //           </p>
    //           <p className="vote">
    //             <span style={{ color: 'white' }}>Vote Average: </span>
    //             {summary.vote_average}
    //           </p>
    //           <p className="cast">
    //             <span style={{ color: 'white' }}>Cast: </span>
    //           </p>
    //           <ul className="actors">
    //             {details.map((actor) => {
    //               return <li>{actor.name}</li>
    //             })}
    //           </ul>
    //         </section>
    //       </section>
    //     </section>
    //     {/* <p>Cast: {details.cast.name}</p> */}
    //   </header>
    // </section>
  )
}

export default ShowDetailsPage
