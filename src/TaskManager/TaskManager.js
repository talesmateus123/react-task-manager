import React from 'react'
import './TaskManager.css'
import { useRoutes } from 'hookrouter'
import ListTasks from './ListTasks/ListTasks'
import NewTask from './NewTask/NewTask'
import InfoTask from './InfoTask/InfoTask'

const routes = {
  '/': () => <ListTasks />,
  '/new': () => <NewTask />,
  '/info/:id': ({id}) => <InfoTask id={parseInt(id)} />
}

function TaskManager() {
  return useRoutes(routes)
}

export default TaskManager;
