import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import App from './App'
import '@testing-library/jest-dom/extend-expect'

describe('App', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div);
        unmountComponentAtNode(div)
    });
})
