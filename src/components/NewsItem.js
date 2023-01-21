import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const { title, description, imgUrl, newsUrl, author, date, source } =
      this.props
    return (
      <>
        <div className='card'>
          <div className='d-flex justify-content-end position-absolute end-0'>
            <span className='badge rounded-pill bg-danger'>{source}</span>
          </div>
          <img
            src={
              imgUrl ??
              'https://c.ndtvimg.com/2021-11/3h2bfuj4_man-using-phone-generic-pixabay_625x300_13_November_21.jpg'
            }
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'>
              <small className='text-muted'>
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target='_blank'
              rel='noreferrer'
              className='btn btn-sm btn-dark'
            >
              Read More
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem
