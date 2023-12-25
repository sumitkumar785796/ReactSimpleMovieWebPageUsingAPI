import React from 'react'
import jsonData from './api.json'
import Fun from './Fun'
import Head from './Head'
import Foot from './Foot'
const Home = () => {
  return (
    <>
    <hr />
    <hr />
    <Head />
    <hr />
    <hr />
      <div className="container">
          <div className="row">
            {
              jsonData.map((element,index)=>{
                return(
                  <Fun
                    key={index}
                    name={element.Title}
                    img={element.Poster}
                    writer={element.Writer}
                  />
                )
              })
            }
        </div>
      </div>
      <Foot />
    </>
  )
}

export default Home