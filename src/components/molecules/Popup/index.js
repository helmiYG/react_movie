// Modal Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import Modal from 'react-modal';
import './styles.scss';

const Popup = ({ title, imageSource, isOpen, className, onClose }) => {
  const classNames = classname('m-modal', className);

  return (
    <>
    {
      isOpen && (
        <Modal isOpen={isOpen}
        onRequestClose={onClose}>
          <div className='modal-content'>
            <h2>Modal Window</h2>
            <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
            <div className="actions">
              <button className="toggle-button" onClick={onClose} >OK</button>
            </div>
          </div>
        </Modal>
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
