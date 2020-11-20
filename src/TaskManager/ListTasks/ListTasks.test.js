import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import ListTasks from './ListTasks'
import Task from '../models/task.model'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ListTasks tests', () => {

    const firstTaskName = 'First task'
    const secondTaskName = 'Second task'
    const thirdTaskName = 'Third task'

    beforeEach(() => {
        localStorage.tasks = JSON.stringify([
            new Task(1, firstTaskName, false),
            new Task(2, secondTaskName, false),
            new Task(3, thirdTaskName, false)
        ])
    })

    afterEach(() => {
        delete localStorage.tasks
    })

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ListTasks />, div);
        unmountComponentAtNode(div)
    });

    it('must to show a table containing tree tasks', () => {
        const { getByTestId } = render(<ListTasks />)
        const table = getByTestId('table')
        expect(table).toHaveTextContent(firstTaskName)
        expect(table).toHaveTextContent(secondTaskName)
        expect(table).toHaveTextContent(thirdTaskName)
    })

    it('must to filter the table data', () => {
        const { getByTestId } = render(<ListTasks />)
        fireEvent.change(getByTestId('task-filter'), { target: { value: firstTaskName }})
        const table = getByTestId('table')
        expect(table).toHaveTextContent(firstTaskName)
        expect(table).not.toHaveTextContent(secondTaskName)
        expect(table).not.toHaveTextContent(thirdTaskName)
    })

})
