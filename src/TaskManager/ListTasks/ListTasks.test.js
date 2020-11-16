import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import ListTasks from './ListTasks'
import '@testing-library/jest-dom/extend-expect'

describe('ListTasks tests', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ListTasks />, div);
        unmountComponentAtNode(div)
    });
})
