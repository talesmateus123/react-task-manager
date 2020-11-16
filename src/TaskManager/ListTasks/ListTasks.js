import React, { useState, useEffect } from 'react'
import './ListTasks.css'
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskItems from './TaskItems/TaskItems'

function ListTasks() {

  const [ tasks, setTasks ] = useState([])
  const [ tasksLoaded , setTasksLoaded ] = useState(false)

  useEffect(() => {
    const getTasks = () => {
      const tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      setTasks(tasks)
    }
    if(!tasksLoaded) {
      getTasks()
    }
  }, [ tasksLoaded ])

  return (
    <div className="text-center">
      <h3>Tasks to do</h3>
      <Table
        striped bordered hover responsive data-testid="table"
      >
        <thead>
          <tr>
            <th>Task</th>
            <th>
              <A 
                href="/new" 
                className="btn btn-success btn-sm" 
                data-testid="btn-new-task"
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;
                New task
              </A>
            </th>
          </tr>
        </thead>
        <tbody>
          <TaskItems tasks={tasks} reloadTasks={() => false} />
        </tbody>
      </Table>
      
    </div>
  )
}

export default ListTasks;
