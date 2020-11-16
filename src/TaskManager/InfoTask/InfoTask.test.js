import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import InfoTask from './InfoTask'
import '@testing-library/jest-dom/extend-expect'

describe('InfoTask tests', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<InfoTask id={1} />, div);
        unmountComponentAtNode(div)
    });
})
