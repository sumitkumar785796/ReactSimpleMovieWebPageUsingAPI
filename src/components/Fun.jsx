import React from 'react'

const Fun = ({name,img,writer}) => {
  return (
    <>
    <div className="container">
    <article className="hentry">
    <header className="entry-header">
        <div className="entry-thumbnail">
        <a href=""><img src={img} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt={name} /></a>
        </div>
        <h2 className="entry-title">{name}</h2>
        <p className="portfoliotype" >{writer}</p>
    </header>
    </article>
    </div>
    </>
  )
}

export default Fun