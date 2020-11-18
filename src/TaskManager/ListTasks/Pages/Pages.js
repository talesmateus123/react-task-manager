import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/Pagination'

function Pages(props) {

  const generateFirstItem = () => (
    <Pagination.First
      key="firstPage"
      onClick={() => props.changePage(1)}
      disabled={props.currentPage === 1}
    />
  )

  const generatePreviousItem = () => (
    <Pagination.Prev
      key="previousPage"
      onClick={() => props.changePage(props.currentPage - 1)}
      disabled={props.currentPage === 1}
    />
  )

  const generateNumericItem = page => (
    <Pagination.Item
      key={page}
      active={page === props.currentPage}
      onClick={() => props.changePage(page)}
    >
      {page}
    </Pagination.Item>
  )

  const generateNextItem = numPages => (
    <Pagination.Next
      key="nextPage"
      onClick={() => props.changePage(props.currentPage + 1)}
      disabled={props.currentPage === numPages}
    />
  )

  const generateLastItem = numPages => (
    <Pagination.Last
      key="lastPage"
      onClick={() => props.changePage(numPages)}
      disabled={props.currentPage === numPages}
    />
  )

  const getPagination = () => {
    const numPages = Math.ceil(props.totalItems / props.itemsPerPage)
    const items = []
    items.push(generateFirstItem())
    items.push(generatePreviousItem())

    for(let page = 1; page <= numPages; page++) {
      items.push(generateNumericItem(page))
    }

    items.push(generateNextItem(numPages))
    items.push(generateLastItem(numPages))

    return items
  }

  return (
    <Pagination data-testid="pagination">
      {getPagination()}
    </Pagination>
  )
}

Pages.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
}

export default Pages;
