import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import Pages from './Pages'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Pages tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Pages
                totalItems={10}
                itemsPerPage={10}
                currentPage={1}
                changePage={() => false}
            />, div);
        unmountComponentAtNode(div)
    });

    it('must toshow pagination containing 3 pages', () => {
        const { getByTestId } = render(
            <Pages
                totalItems={15}
                itemsPerPage={5}
                currentPage={1}
                changePage={() => false}
            />)
        const pagination = getByTestId('pagination')
        expect(pagination).toHaveTextContent('1')
        expect(pagination).toHaveTextContent('2')
        expect(pagination).toHaveTextContent('3')
    });

})
