// Modal Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Popup = ({ isOpen, className, onClose, image }) => {
  const classNames = classname('m-modal', className);

  return (
    <>
    {
      isOpen && (
        <div className={classNames} onClick={onClose}>
          <div className='modal-content'>
            <img src={image} alt='poster'/>
          </div>
        </div>
      )
    }
      
    </>
  )
};

Popup.propTypes = {
  title: PropTypes.string,
};

Popup.defaultProps = {
  title: '',
};

export default Popup;
