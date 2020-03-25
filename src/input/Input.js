import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'

const NeumorphicInput = (props) => {
  const { className, onChange, value, onValueChange } = props
  const classes = [styles.neumorphic, styles.neumorphic__input]
  if (className != null) {
    classes.push(className)
  }

  const handleOnChange = (event) => {
    if (onChange) {
      onChange(event)
    }
    if (onValueChange) {
      onValueChange(event.target.value)
    }
  }

  return (
    <input
      {...props}
      type='text'
      value={value}
      className={classes.join(' ')}
      onChange={handleOnChange}
    />
  )
}

NeumorphicInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func
}

export default NeumorphicInput
