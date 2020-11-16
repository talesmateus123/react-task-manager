import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import NewTask from './NewTask'
import '@testing-library/jest-dom/extend-expect'

describe('NewTask tests', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewTask />, div);
        unmountComponentAtNode(div)
    });
})
