import React, { Component } from 'react'
import loading from './loading.gif'
// import loading from './6SSp.gif'
// import loading from './2yqT.gif'
// import loading from './2unv.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt='loading' style={{ width: '3%' }} />
      </div>
    )
  }
}

export default Spinner
