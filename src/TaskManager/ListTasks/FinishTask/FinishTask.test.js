import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import FinishTask from './FinishTask'
import Task from '../../models/task.model'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('FinishTask tests', () => {

    const taskName = 'task1'
    const task = new Task(1, taskName, false)

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FinishTask task={task} reloadTasks={() => false} />, div);
        unmountComponentAtNode(div)
    });

    it('must to show the modal', () => {
        const { getByTestId } = render(<FinishTask task={task} reloadTasks={() => false} />);
        fireEvent.click(getByTestId('btn-open-modal'))
        expect(getByTestId('modal')).toHaveTextContent(taskName)
    });

    it('must to finish a task', () => {
        localStorage.tasks = JSON.stringify([task])
        const { getByTestId } = render(<FinishTask task={task} reloadTasks={() => false} />);
        fireEvent.click(getByTestId('btn-open-modal'))
        fireEvent.click(getByTestId('btn-finish'))
        const tasks = JSON.parse(localStorage.tasks)
        expect(tasks[0].finished).toBeTruthy()
    });

})
