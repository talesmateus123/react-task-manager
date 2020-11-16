import React, { useState } from 'react'
import {
  Button,
  Form,
  Jumbotron,
  Modal
} from 'react-bootstrap'
import { navigate, A } from 'hookrouter'
import './NewTask.css'
import Task from '../models/task.model'

function NewTask() {

  const [ task, setTask ] = useState('')
  const [ validatedForm, setValidatedForm ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)

  const save = event => {
    event.preventDefault()
    setValidatedForm(true)
    if(event.currentTarget.checkValidity()) {
      const tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      tasks.push(new Task(new Date().getTime(), task, false))
      localStorage.tasks = JSON.stringify(tasks)
      setShowModal(true)
    }
  }

  const handleTask = event => {
    setTask(event.target.value)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    navigate('/')
  }

  return (
    <div>
      <h3 className="text-center">New Task</h3>
      <Jumbotron>
        <Form
          validated={validatedForm}
          noValidate
          onSubmit={save}
        >
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              value={task}
              onChange={handleTask}
              data-testid="task"
              type="text"
              placeholder="Type a task"
              minLength="5"
              maxLength="100"
              required
            />
            <Form.Control.Feedback type="invalid">
              The task must contain at least 5 characters
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit"
              data-testid="btn-save"
            >
              Save
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">Back</A>
          </Form.Group>
        </Form>
        <Modal 
          show={showModal} 
          onHide={handleCloseModal}
          data-testid="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Success
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Task successfuly added!
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

export default NewTask;
