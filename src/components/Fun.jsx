import React from 'react'

const Fun = ({name,img,writer}) => {
  return (
    <>
    <div className="col-sm-4">
    <header className="entry-header">
      <div className="entry-thumbnail">
        <img style={{width:'600px',height:'400px'}} src={img} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt={name} />
      </div>
      <h2 className="entry-title">{name}</h2>
      <p className="portfoliotype">{writer}</p>
    </header>
    </div>
    </>
  )
}

export default Fun