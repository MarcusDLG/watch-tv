// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

// const Featured = () => {
//   const [featured, setFeatured] = useState([])
//   const getFeatured = async () => {
//     const resp = await axios.get(
//       'https://api.themoviedb.org/3/tv/top_rated?api_key=16dccf4635fc67bb4bf1e38c0a4459dd&language=en-US&page=1'
//     )
//     setFeatured(resp.data.results[Math.round(Math.random() * 20)])
//   }
//   useEffect(() => {
//     getFeatured()
//   }, [])

//   const name = featured.name
//   const poster_path = featured.poster_path
//   const overview = featured.overview
//   const id = featured.id
//   const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`
//   const alt = `${name} poster`
//   return (
//     <li className="showDescription">
//       <img src={image} alt={alt}></img>
//       <p>{overview}</p>
//       <Link to={`/tv/${id}`}>{name}</Link>
//     </li>
//   )
// }
// export default Featured
