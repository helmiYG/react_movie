import React from 'react'
import PropTypes from 'prop-types'
import {
  useParams
} from "react-router-dom";

import Logo from 'assets/images/logo.svg'

const DetailComponent = ({image}) => {
  let { id } = useParams();
  return (
    <div className='p-detail'>
      detail {id}
      <div className='detail-upside'>
        <div className='detail-image'>
          <img src={Logo} alt='pokemon'/>
        </div>
        <div className='detail-movie'>
          <div>hshshs</div>
          <div>hshshs</div>
          <div>hshshs</div>
          <div>hshshs</div>
        </div>
      </div>
      <div className='detail-downside'>
        <div className='detail-description'>
          bchwfkbailhkvbfkabkjvbfav kkeabvefabvaefjvea kjeabvkefhabve jfbvfhabvafilev
        </div>
      </div>

    </div>
  )
}

DetailComponent.propTypes = {

}

export default DetailComponent
