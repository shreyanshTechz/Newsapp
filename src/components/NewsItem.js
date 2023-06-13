import React from 'react'

export default function NewsItem(props){


    let { title, description, imageUrl, newsurl, Author, date } = props;
    return (
      <div>
        <div className="card my-3">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5><h6>Headlines <span class="badge bg-secondary">New</span></h6>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-mute">By {!Author ? 'Unknown' : Author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-primary btn-sm btn-dark">Read More</a>

          </div>
        </div>
      </div>
    )
  }

