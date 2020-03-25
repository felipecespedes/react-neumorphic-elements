import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'
import NeumorphicButton from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NeumorphicRoundButton = (props) => {
  const { children, icon, onClick, iconColor, iconSize, link } = props
  let size = props.size || 50
  let content = children
  if (icon) {
    content = <FontAwesomeIcon icon={icon} color={iconColor} size={iconSize} />
  }

  return (
    <NeumorphicButton
      {...props}
      className={styles['neumorphic__button-round']}
      style={{
        height: size,
        width: size,
        ...props.style || {}
      }}
      link={link}
      onClick={onClick}
    >
      { content }
    </NeumorphicButton>
  )
}

NeumorphicRoundButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
  icon: PropTypes.any, // TODO it should be a shape https://github.com/FortAwesome/react-fontawesome
  onClick: PropTypes.func,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  link: PropTypes.string
}

export default NeumorphicRoundButton
