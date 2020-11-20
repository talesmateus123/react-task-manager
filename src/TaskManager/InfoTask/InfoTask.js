import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './InfoTask.css'
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap'
import { navigate, A } from 'hookrouter'

function InfoTask(props) {

  const [ taskName, setTaskName ] = useState('')
  const [ showModal, setShowModal ] = useState(false)
  const [ validatedForm, setValidatedForm ] = useState(false)
  const [ loadTask, setLoadTask ] = useState(true)

  const update = event => {
    event.preventDefault()
    setValidatedForm(true)
    if(event.currentTarget.checkValidity()) {
      let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      tasks = tasks.map(task => {
        if(task.id === parseInt(props.id))
          task.name = taskName
        return task
      })
      localStorage.tasks = JSON.stringify(tasks)
      setShowModal(true)
    }

  }

  const handleCloseModal = () => {
    navigate('/')
  }

  const handleTask = event => {
    setTaskName(event.target.value)
  }

  useEffect(() => {
    if(loadTask) {
      const tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      const task = tasks.filter(task => task.id === parseInt(props.id))[0]
      setTaskName(task.name)
      setLoadTask(false)
    }
  }, [ loadTask, props ])
  
  return (
    <div>
      <h3>Info Task</h3>
      <Jumbotron>
        <Form onSubmit={update} noValidate validated={validatedForm}>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Type a task."
              minLength="5"
              maxLength="100"
              required
              value={taskName}
              onChange={handleTask}
              data-testid="task"
            />
            <Form.Control.Feedback 
              type="invalid"
            > 
              The task must contain at least 5 characters
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variante="success"
              type="submit"
              data-testid="btn-update"
            >
              Save
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">
              Back
            </A>
          </Form.Group>
        </Form>
        <Modal show={showModal} onHide={handleCloseModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Task successfuly saved
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={handleCloseModal}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  )
}

InfoTask.propTypes = {
  id: PropTypes.number.isRequired
}

export default InfoTask;
