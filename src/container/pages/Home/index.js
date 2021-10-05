// Home Component
// --------------------------------------------------------

import React from 'react'
import PropTypes from 'prop-types'
import Dashboard  from 'container/templates/Dashboard'
import HomeComponent from './HomeComponent'


const Home = props => {
  return (
      <Dashboard 
        title='MOVIEDB'
        content={<HomeComponent  />}
      />
  )
}

Home.propTypes = {
  propsName: PropTypes.string,  
}

Home.defaultProps = {
  propsName: '',
};

export default Home
