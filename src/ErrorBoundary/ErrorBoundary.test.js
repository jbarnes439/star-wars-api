import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ErrorBoundary from './ErrorBoundary';


describe('ErrorBoundary Component', () => {
  //test cases go here

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorBoundary />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<ErrorBoundary />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
})