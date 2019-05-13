import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card  from './Card';

describe('Card component rendering test', () => {
    const allCardsList = [
        { title: 'First card', content: 'lorem ipsum' }, 
        { title: 'Second card', content: 'lorem ipsum' },
        { title: 'Third card', content: 'lorem ipsum' },
        { title: 'Fourth card', content: 'lorem ipsum' }
    ];
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title={allCardsList.title} content={allCardsList.content} />, div);
        ReactDOM.unmountComponentAtNode(div);

    })
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card title={allCardsList.title} content={allCardsList.content} />)
        .toJSON();
        expect(tree).toMatchSnapshot();

    });
});
