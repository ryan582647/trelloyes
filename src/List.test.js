import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component maps and passes to Card correctly', () => {
    const allCardsList = [
        { title: 'First card', content: 'lorem ipsum' }, 
        { title: 'Second card', content: 'lorem ipsum' },
        { title: 'Third card', content: 'lorem ipsum' }
    ];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( <List key="1"
            header="First list"
            cards={allCardsList} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List key="1"
        header="First list"
        cards={allCardsList} />)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});