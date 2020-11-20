import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import Sorting from './Sorting'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Sorting tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Sorting sortAsc={false} sortDesc={false} />, div);
        unmountComponentAtNode(div)
    });

    it('must to show the default sorting', () => {
        const { getByTestId } = render(<Sorting sortAsc={false} sortDesc={false} />);
        expect(getByTestId('faSort')).not.toHaveClass('hidden')
        expect(getByTestId('faSortUp')).toHaveClass('hidden')
        expect(getByTestId('faSortDown')).toHaveClass('hidden')
    });

    it('must to show the ascending sorting', () => {
        const { getByTestId } = render(<Sorting sortAsc={true} sortDesc={false} />);
        expect(getByTestId('faSort')).toHaveClass('hidden')
        expect(getByTestId('faSortUp')).not.toHaveClass('hidden')
        expect(getByTestId('faSortDown')).toHaveClass('hidden')
    });

    it('must to show the descending sorting', () => {
        const { getByTestId } = render(<Sorting sortAsc={false} sortDesc={true} />);
        expect(getByTestId('faSort')).toHaveClass('hidden')
        expect(getByTestId('faSortUp')).toHaveClass('hidden')
        expect(getByTestId('faSortDown')).not.toHaveClass('hidden')
    });

})
