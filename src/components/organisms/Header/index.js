// Header Component
// --------------------------------------------------------
import React from "react";
import PropTypes from 'prop-types';
import classname from 'classnames';
import { useHistory } from "react-router-dom";
import './styles.scss';


const Header = ({ className, title }) => {

  let history = useHistory();
  const classNames = classname('o-Header', className);
  const onClick = () => {
    history.push('/')
  }
  return (
    <div className={classNames}>
        <div className='header-title' onClick={onClick}>
          {title}
        </div>
    </div>
  );
}


Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
Header.defaultProps = {
  className: '',
  title: '',
};
export default Header;