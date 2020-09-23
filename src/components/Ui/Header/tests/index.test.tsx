import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('Header', () => {
  const component = shallow(<Header />);

  it('renders', () => {
    expect(component.exists()).toEqual(true);
  });

  it('snapshotShot', () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
