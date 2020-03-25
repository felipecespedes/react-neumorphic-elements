import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NeumorphicSearch = (props) => {
  const { placeholder, onChange, value, onValueChange } = props
  const classes = [styles.neumorphic, styles.neumorphic__input]

  const handleOnChange = (event) => {
    if (onChange) {
      onChange(event)
    }
    if (onValueChange) {
      onValueChange(event.target.value)
    }
  }

  return (
    <div className={classes.join(' ')}>
      <FontAwesomeIcon icon='search' color='#8A92A5' size='xs' />
      {/* TODO use the NeumorphicInput component instead */}
      <input
        type='text'
        value={value}
        placeholder={placeholder || 'Search'}
        className={styles['neumorphic__search-input']}
        onChange={handleOnChange}
      />
    </div>
  )
}

NeumorphicSearch.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func
}

export default NeumorphicSearch
