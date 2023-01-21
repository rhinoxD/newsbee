import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = ({ setProgress, pageSize, country, category, apiKey }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  document.title = `NewsBee – ${category[0].toUpperCase() + category.slice(1)}`

  const updateNews = async () => {
    setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
    setLoading(true)
    const res = await fetch(url)
    setProgress(30)
    const data = await res.json()
    setProgress(70)
    setArticles(data.articles)
    setTotalResults(data.totalResults)
    setLoading(false)
    setProgress(100)
  }

  useEffect(() => {
    updateNews()
  }, [])

  const scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`
    const res = await fetch(url)
    const data = await res.json()
    setArticles(articles.concat(data.articles))
    setTotalResults(data.totalResults)
  }

  return (
    <>
      <h2 className='text-center mt-5'>
        NewsBee – Top {category[0].toUpperCase() + category.slice(1)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className='container my-5'>
          <div className='row my-5'>
            {articles.map(
              ({
                url,
                title,
                description,
                urlToImage,
                author,
                publishedAt,
                source,
              }) => (
                <div className='col-md-4' key={url}>
                  <NewsItem
                    title={title && title}
                    description={description && description}
                    imgUrl={urlToImage && urlToImage}
                    newsUrl={url}
                    author={author ?? 'Unknown'}
                    date={publishedAt && publishedAt}
                    source={source.name}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
