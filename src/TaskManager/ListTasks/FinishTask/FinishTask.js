import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

function FinishTask(props) {

  const [ showModal, setShowModal ] = useState(false)

  const handleOpenModal = event => {
    event.preventDefault()
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleFinishTask = event => {
    event.preventDefault()
    let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
    tasks = tasks.map(task => {
      if(task.id === props.task.id)
        task.finished = true
      return task
    })
    localStorage.tasks = JSON.stringify(tasks)
    setShowModal(false)
    props.reloadTasks(true)
  }

  return (
    <span
      className={props.className}
    >
      <Button 
        className="btn-sm"
        onClick={handleOpenModal}
        data-testid="btn-open-modal"
      >
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        data-testid="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Finish task?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove the task?
          <br />
          <b>{props.task.name}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleFinishTask}
            data-testid="btn-finish"
          >
            Yes
          </Button>
          <Button
            variant="light"
            onClick={handleCloseModal}
            data-testid="btn-close-modal"
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

FinishTask.propTypes = {
  task: PropTypes.object.isRequired,
  reloadTasks: PropTypes.func.isRequired,
  className:PropTypes.string
}

export default FinishTask;
