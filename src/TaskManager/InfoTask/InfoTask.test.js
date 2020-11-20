import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import InfoTask from './InfoTask'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Task from '../models/task.model'

describe('InfoTask tests', () => {
    const taskId = 1;
    const task = new Task(taskId, 'new_task', false)

    beforeEach(() => {
        localStorage.tasks = JSON.stringify([task])
    })

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<InfoTask id={taskId} />, div);
        unmountComponentAtNode(div)
    });
})
