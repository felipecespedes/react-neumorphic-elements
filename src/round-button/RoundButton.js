import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'
import NeumorphicButton from '../button/Button'

const NeumorphicRoundButton = (props) => {
  const { children } = props
  let size = props.size || 50

  return (
    <NeumorphicButton
      {...props}
      className={styles['neumorphic__button-round']}
      style={{
        height: size,
        width: size,
        ...props.style || {}
      }}
    >
      { children }
    </NeumorphicButton>
  )
}

NeumorphicRoundButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object
}

export default NeumorphicRoundButton
