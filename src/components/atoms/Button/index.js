// Button Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Button = ({ className, type, onMouseOver, onFocus, onClick,style, disabled, id, children }) => {
  const classNames = classname('a-button', className);

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames}
      onMouseOver={onMouseOver}
      onFocus={onFocus}
      onClick={onClick}
      style={style}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
propsName: PropTypes.string,
};

Button.defaultProps = {
propsName: '',
};

export default Button;
