import React from "react"
const Movie = ({name,img}) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="movie">
          <div className="movie-image">
            <p>{name}</p>
            <a href="#">
              <img src={img} alt={name} />
            </a>
            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Movie