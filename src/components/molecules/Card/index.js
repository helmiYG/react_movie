// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Card = ({ image, className, name, onClick }) => {
  const classNames = classname('m-Card', className);
  // image
  return (
    <div className={classNames} onClick={onClick}>
      <img src={image} alt='gambar'/>
      {name}
    </div>
  );
}

Card.propTypes = {
propsName: PropTypes.string,
};

Card.defaultProps = {
propsName: '',
};

export default Card;
