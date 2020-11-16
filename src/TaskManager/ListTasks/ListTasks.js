import React from 'react'
import './ListTasks.css'
import { A } from 'hookrouter'

function ListTasks() {
  return (
    <div>
      <h1>List Tasks</h1>
      <A href="/new" className="btn btn-success btn-sm">New task</A>
    </div>
  )
}

export default ListTasks;
