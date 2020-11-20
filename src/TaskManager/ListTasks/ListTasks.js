import React, { useState, useEffect } from 'react'
import './ListTasks.css'
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskItems from './TaskItems/TaskItems'
import Pages from './Pages/Pages'
import Sorting from './Sorting/Sorting'

function ListTasks() {

  const ITEMS_PER_PAGE = 3

  const [ tasks, setTasks ] = useState([])
  const [ loadTasks , setLoadTasks ] = useState(true)
  const [ totalItems, setTotalItems] = useState(0)
  const [ currentPage, setCurrentPage ] = useState(1)

  const [ sortAsc, setSortAsc ] = useState(false)
  const [ sortDesc, setSortDesc ] = useState(false)

  const handleChangePage = page => {
    setCurrentPage(page)
    setLoadTasks(true)
  }

  const handleSorting = event => {
    event.preventDefault()
    if(!sortAsc && !sortDesc) {
      setSortAsc(true)
      setSortDesc(false)
    }
    else if(sortAsc) {
      setSortAsc(false)
      setSortDesc(true)
    }
    else if(sortDesc) {
      setSortAsc(false)
      setSortDesc(false)
    }
    setLoadTasks(true)
  }

  useEffect(() => {
    const getTasks = () => {
      let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      // sorting
      if(sortAsc) {
        tasks.sort((task1, task2) => task1.name.toLowerCase() > task2.name.toLowerCase() ? 1 : -1)
      }
      else if(sortDesc) {
        tasks.sort((task1, task2) => task1.name.toLowerCase() < task2.name.toLowerCase() ? 1 : -1)
      }
      // pagination
      setTotalItems(tasks.length)
      setTasks(tasks.splice((currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE))
    }
    if(loadTasks) {
      getTasks()
    }
  }, [ loadTasks, currentPage, sortAsc, sortDesc ])

  return (
    <div className="text-center">
      <h3>Tasks to do</h3>
      <Table
        striped bordered hover responsive data-testid="table"
      >
        <thead>
          <tr>
            <th>
              <a href="/" onClick={handleSorting}>
                Task
                &nbsp;
                <Sorting 
                  sortAsc={sortAsc}
                  sortDesc={sortDesc}
                />
              </a>
            </th>
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
