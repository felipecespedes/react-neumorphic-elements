import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'

const NeumorphicInput = (props) => {
  const { className } = props
  const classes = [styles.neumorphic, styles.neumorphic__input]
  if (className != null) {
    classes.push(className)
  }

  return (
    <input
      {...props}
      type='text'
      className={classes.join(' ')}
    />
  )
}

NeumorphicInput.propTypes = {
  className: PropTypes.string
}

export default NeumorphicInput
