import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function RemoveTask(props) {

  const [ showModal, setShowModal ] = useState(false)

  const handleOpenModal = event => {
    event.preventDefault()
    setShowModal(true)
  }

  const handleCloseModal = event => {
    setShowModal(false)
  }

  const handleRemoveTask = event => {
    event.preventDefault()
    let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
    tasks = tasks.filter(task => task.id !== props.task.id)
    localStorage.tasks = JSON.stringify(tasks)
    setShowModal(false)
    props.reloadTasks(true)
  }
  
  return (
    <span>
      <Button variant="danger" className="btn-sm" onClick={handleOpenModal} data-testid="btn-open-modal">
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
      <Modal 
        show={showModal}
        onHide={handleCloseModal}
        data-testid="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Remove modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure?
          <br />
          <b>{props.task.name}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleRemoveTask} data-testid="btn-remove-task">
            Yes
          </Button>
          <Button variant="light" onClick={handleCloseModal} data-testid="btn-close-modal">
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

RemoveTask.propTypes = {
  task: PropTypes.object.isRequired,
  reloadTasks: PropTypes.func.isRequired
}

export default RemoveTask;
