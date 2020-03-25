import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'

const NeumorphicIcon = (props) => {
  const { url } = props
  let size = props.size || 50
  const classes = [styles.neumorphic, styles.neumorphic__icon]

  return (
    <img
      {...props}
      className={classes.join(' ')}
      src={url}
      style={{
        height: size,
        width: size,
        ...props.style || {}
      }}
    />
  )
}

NeumorphicIcon.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropTypes.object
}

export default NeumorphicIcon
