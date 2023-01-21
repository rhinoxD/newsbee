import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    }
    document.title = `NewsBee – ${
      this.props.category[0].toUpperCase() + this.props.category.slice(1)
    }`
  }
  updateNews = async () => {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    const res = await fetch(url)
    this.props.setProgress(30)
    const data = await res.json()
    this.props.setProgress(70)
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    })
    this.props.setProgress(100)
  }
  componentDidMount = async () => this.updateNews()
  scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`
    const res = await fetch(url)
    const data = await res.json()
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults,
    })
  }
  render() {
    return (
      <>
        <h2 className='text-center mt-5'>
          NewsBee – Top{' '}
          {this.props.category[0].toUpperCase() + this.props.category.slice(1)}{' '}
          Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className='container my-5'>
            <div className='row my-5'>
              {this.state.articles.map(
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
}

export default News
