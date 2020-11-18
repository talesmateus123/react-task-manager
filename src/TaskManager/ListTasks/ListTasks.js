import React, { useState, useEffect } from 'react'
import './ListTasks.css'
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskItems from './TaskItems/TaskItems'
import Pages from './Pages/Pages'

function ListTasks() {

  const ITEMS_PER_PAGE = 3

  const [ tasks, setTasks ] = useState([])
  const [ loadTasks , setLoadTasks ] = useState(true)
  const [ totalItems, setTotalItems] = useState(0)
  const [ currentPage, setCurrentPage ] = useState(1)

  const handleChangePage = page => {
    setCurrentPage(page)
    setLoadTasks(true)
  }

  useEffect(() => {
    const getTasks = () => {
      const tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      setTotalItems(tasks.length)
      setTasks(tasks.splice((currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE))
    }
    if(loadTasks) {
      getTasks()
    }
  }, [ loadTasks, currentPage ])

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
          <TaskItems tasks={tasks} reloadTasks={setLoadTasks} />
        </tbody>
      </Table>
      <Pages
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        changePage={handleChangePage}
      />
    </div>
  )
}

export default ListTasks;
