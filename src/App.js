import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import News from './components/News'

import './App.css'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  const pageSize = 9
  const apiKey = process.env.REACT_APP_API_KEY
  const updateProgress = (progress) => {
    setProgress(progress)
  }
  return (
    <Router>
      <Navbar />
      <LoadingBar color='#f11946' height={3} progress={progress} />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <News
              setProgress={updateProgress}
              key='general'
              pageSize={pageSize}
              country='in'
              category='general'
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path='/business'
          element={
            <News
              setProgress={updateProgress}
              key='business'
              pageSize={pageSize}
              country='in'
              category='business'
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path='/entertainment'
          element={
            <News
              setProgress={updateProgress}
              key='entertainment'
              pageSize={pageSize}
              country='in'
              category='entertainment'
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path='/health'
          element={
            <News
              setProgress={updateProgress}
              key='health'
              pageSize={pageSize}
              country='in'
              category='health'
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path='/science'
          element={
            <News
              setProgress={updateProgress}
              key='science'
              pageSize={pageSize}
              country='in'
              category='science'
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path='/sports'
          element={
            <News
              setProgress={updateProgress}
              key='sports'
              pageSize={pageSize}
              country='in'
              category='sports'
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path='/technology'
          element={
            <News
              setProgress={updateProgress}
              key='technology'
              pageSize={pageSize}
              country='in'
              category='technology'
              apiKey={apiKey}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
