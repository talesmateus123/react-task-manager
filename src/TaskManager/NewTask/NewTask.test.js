import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import NewTask from './NewTask'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('NewTask tests', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewTask />, div);
        unmountComponentAtNode(div)
    });

    it('must save a new task', () => {
        const { getByTestId } = render(<NewTask />)
        fireEvent.change(getByTestId('task'), { target: { value: 'testing comopent' } })
        fireEvent.click(getByTestId('btn-save'))
        expect(getByTestId('modal')).toHaveTextContent('Success')
        expect(getByTestId('modal')).toHaveTextContent('Task successfuly added!')
    })
})
