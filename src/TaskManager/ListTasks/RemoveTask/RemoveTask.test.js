import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import RemoveTask from './RemoveTask'
import Task from '../../models/task.model'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('RemoveTask tests', () => {

    const taskName = 'task1'
    const task = new Task(1, taskName, false)

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RemoveTask task={task} reloadTasks={() => false} />, div);
        unmountComponentAtNode(div)
    }); 
    
    it('must to show the modal', () => {
        const { getByTestId } = render(<RemoveTask task={task} reloadTasks={() => false} />);
        fireEvent.click(getByTestId('btn-open-modal'))
        expect(getByTestId('modal')).toHaveTextContent(taskName)
    });

    it('must to remove a task', () => {
        localStorage.tasks = JSON.stringify([task])
        const { getByTestId } = render(<RemoveTask task={task} reloadTasks={() => false} />);
        fireEvent.click(getByTestId('btn-open-modal'))
        fireEvent.click(getByTestId('btn-remove-task'))
        const tasks = JSON.parse(localStorage.tasks)
        expect(tasks.length).toBe(0)
    });

})
