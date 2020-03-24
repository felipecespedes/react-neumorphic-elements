import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'

const NeumorphicButton = (props) => {
  const { children, isActive, className } = props
  const classes = [styles.neumorphic, styles.neumorphic__button]
  if (isActive) {
    classes.push(styles['neumorphic__is-active'])
  }
  if (className != null) {
    classes.push(className)
  }

  return (
    <button
      {...props}
      className={classes.join(' ')}
    >
      { children }
    </button>
  )
}

NeumorphicButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool
}

export default NeumorphicButton
