import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import Pages from './Pages'
import Task from '../../models/task.model'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Pages tests', () => {

    const taskName = 'task1'
    const task = new Task(1, taskName, false)

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Pages task={task} reloadTasks={() => false} />, div);
        unmountComponentAtNode(div)
    });

})
