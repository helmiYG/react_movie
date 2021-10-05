// Search Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';

import { H1, Input } from 'components'
import classname from 'classnames';
import './styles.scss';
import Button from 'components/atoms/Button';

const Search = ({ handleChange, name, handleClick, handleReset }) => {
  
  const classNames = classname('m-search')
  return (
    <div className={classNames}>
      <H1>TEMUKAN FILM KESUKAANMU DISINI!</H1>
      <div className='mb-20'>
       <Input type='text' onChange={handleChange} value={name} placeholder='masukkan judul film' size='full'/>
      </div>
      <Button onClick={handleClick} variant='primary'>Cari</Button>
      &nbsp;
      <Button onClick={handleReset} variant='secondary'>Reset</Button>
    </div>
  )
}

Search.propTypes = {
propsName: PropTypes.string,
};

Search.defaultProps = {
propsName: '',
};

export default Search;
