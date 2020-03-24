import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NeumorphicSearch = (props) => {
  const { placeholder } = props
  const classes = [styles.neumorphic, styles.neumorphic__input]

  return (
    <div className={classes.join(' ')}>
      <FontAwesomeIcon icon='search' color='#8A92A5' size='xs' />
      <input
        type='text'
        placeholder={placeholder || 'Search'}
        className={styles['neumorphic__search-input']}
      />
    </div>
  )
}

NeumorphicSearch.propTypes = {
  placeholder: PropTypes.string
}

export default NeumorphicSearch
