import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import TaskManager from './TaskManager'
import '@testing-library/jest-dom/extend-expect'

describe('TaskManager tests', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<TaskManager />, div);
        unmountComponentAtNode(div)
    });
})
