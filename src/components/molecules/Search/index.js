// Search Component
// --------------------------------------------------------

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'

import { H1, Input } from 'components'
import { getMoviesAction  } from 'stores/actions'
import classname from 'classnames';
import './styles.scss';
import Button from 'components/atoms/Button';

const Search = ({ propsName }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleChange = ({ target }) => {
    setName(target.value)
    // dispatch(getMoviesAction(target.value))
  }

  const hanldeFocus = () => {
    // dispatch(setOnSearching(false))
  }

  const hanldeOnBlur = () => {
    // dispatch(setOnSearching(true))
  }


  const classNames = classname('m-search')
  return (
    <div className={classNames}>
      <H1>Search</H1>
      <Input type='text' onChange={handleChange} onFocus={hanldeFocus} onBlur={hanldeOnBlur} value={name} placeholder='input your keyword here' size='full'/>
      <Button>cari</Button>
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
