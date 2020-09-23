import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  const component = shallow(<App />);

  it('renders', () => {
    expect(component.exists()).toEqual(true);
  });

  it('html structure must match snapshot', () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
