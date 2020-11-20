import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

function Sorting(props) {
  return (
    <span>
      <FontAwesomeIcon 
        icon={faSort} 
        className={props.sortAsc || props.sortDesc ? 'hidden' : ''} 
        data-testid="faSort" 
      />
      <FontAwesomeIcon 
        icon={faSortUp} 
        className={props.sortAsc ? '' : 'hidden'} 
        data-testid="faSortUp" 
      />
      <FontAwesomeIcon 
        icon={faSortDown} 
        className={props.sortDesc ? '' : 'hidden'} 
        data-testid="faSortDown" 
      />
    </span>
  )
}

Sorting.propTypes = {
  sortAsc: PropTypes.bool.isRequired,
  sortDesc: PropTypes.bool.isRequired,
}

export default Sorting;
