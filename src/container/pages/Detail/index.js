// Detail Component
// --------------------------------------------------------

import React from 'react'
import PropTypes from 'prop-types'

// components
import DetailComponent from './DetailComponent'
import Dashboard  from 'container/templates/Dashboard'

import './styles.scss'

const Detail = props => {
  return (
    <Dashboard 
      title='MOVIEDB'
      content={<DetailComponent  />}
    />
  )
}

Detail.propTypes = {
  propsName: PropTypes.string,  
}

Detail.defaultProps = {
  propsName: '',
};

export default Detail
