import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import News from './components/News'

import './App.css'
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  pageSize = 9
  apiKey = process.env.REACT_APP_API_KEY
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' height={3} progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <News
                setProgress={this.setProgress}
                key='general'
                pageSize={this.pageSize}
                country='in'
                category='general'
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path='/business'
            element={
              <News
                setProgress={this.setProgress}
                key='business'
                pageSize={this.pageSize}
                country='in'
                category='business'
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
                setProgress={this.setProgress}
                key='entertainment'
                pageSize={this.pageSize}
                country='in'
                category='entertainment'
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                setProgress={this.setProgress}
                key='health'
                pageSize={this.pageSize}
                country='in'
                category='health'
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path='/science'
            element={
              <News
                setProgress={this.setProgress}
                key='science'
                pageSize={this.pageSize}
                country='in'
                category='science'
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path='/sports'
            element={
              <News
                setProgress={this.setProgress}
                key='sports'
                pageSize={this.pageSize}
                country='in'
                category='sports'
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path='/technology'
            element={
              <News
                setProgress={this.setProgress}
                key='technology'
                pageSize={this.pageSize}
                country='in'
                category='technology'
                apiKey={this.apiKey}
              />
            }
          />
        </Routes>
      </Router>
    )
  }
}

export default App
