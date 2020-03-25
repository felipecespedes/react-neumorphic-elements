import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'

const NeumorphicButton = (props) => {
  const { children, isActive, className, onClick, link } = props
  const classes = [styles.neumorphic, styles.neumorphic__button]
  if (isActive) {
    classes.push(styles['neumorphic__is-active'])
  }
  if (className != null) {
    classes.push(className)
  }

  if (link) {
    return (
      <a
        {...props}
        className={classes.join(' ')}
        href={link}
      >
        { children }
      </a>
    )
  }

  return (
    <button
      {...props}
      className={classes.join(' ')}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

NeumorphicButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  link: PropTypes.string
}

export default NeumorphicButton
