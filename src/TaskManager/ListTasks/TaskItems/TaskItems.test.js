import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import TaskItems from './TaskItems'
import Task from '../../models/task.model'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('TaskItems tests', () => {

    const taskName = 'task1'
    const task = new Task(1, taskName, false)
    const taskFinished = new Task(2, taskName, true)

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<TaskItems tasks={[]} reloadTasks={() => false} />, div);
        unmountComponentAtNode(div)
    });

    it('must to show the task', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <TaskItems tasks={[task]} reloadTasks={() => false} />
                </tbody>
            </table>
        );
        expect(getByTestId('task')).toHaveTextContent(taskName)
    })

    it('must to show the finished task', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <TaskItems tasks={[taskFinished]} reloadTasks={() => false} />
                </tbody>
            </table>
        );
        expect(getByTestId('task-name')).toHaveStyle('text-decoration: line-through')
    })
})
