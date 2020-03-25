import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'
import NeumorphicIcon from '../icon/Icon'

const NeumorphicItem = (props) => {
  const { icon, title, content, key, rightContent } = props
  const classes = [styles.neumorphic, styles.neumorphic__item]

  return (
    <div
      key={key}
      className={classes.join(' ')}
    >
      { icon != null && (
        <NeumorphicIcon url={icon} />
      ) }
      <div className={styles['neumorphic__item-content-container']}>
        { title != null && (
          <p className={styles['neumorphic__item-title']}>{title}</p>
        ) }
        { content != null && (
          <p className={styles['neumorphic__item-content']}>{content}</p>
        ) }
      </div>
      { rightContent || null }
    </div>
  )
}

NeumorphicItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  key: PropTypes.string,
  rightContent: PropTypes.any
}

export default NeumorphicItem
