import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { A } from 'hookrouter'

function TaskItems(props) {

  return (
    props.tasks.map(task => {
      return (
        <tr key={task.id} data-testid="task">
          <td 
            width="75%" 
            data-testid="task-name"
            style={{textDecoration: task.finished ? 'line-through' : 'none' }}
          >
            {task.name}
          </td>
          <td className="text-right">
            <A 
              href={`/info/${task.id}`}
              className={task.finished ? 'hidden' : 'btn btn-warning btn-sm'}
            >
              <FontAwesomeIcon icon={faEdit} />
            </A>
          </td>
        </tr>
      )
    })
  )
}

TaskItems.propTypes = {
  tasks: PropTypes.array.isRequired,
  reloadTasks: PropTypes.func.isRequired
}

export default TaskItems;
