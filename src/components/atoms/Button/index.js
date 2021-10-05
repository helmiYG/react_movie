// Button Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Button = ({ type, onMouseOver, onFocus, onClick, disabled, id, children, variant }) => {
  const classNames = classname('a-button', variant);

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames}
      onMouseOver={onMouseOver}
      onFocus={onFocus}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string,
  onMouseOver: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: '',
  children: '',
  variant: '',
  id: '',
  onMouseOver: () => {},
  onFocus: () => {},
  onClick: () => {},
  disabled: false
};

export default Button;
