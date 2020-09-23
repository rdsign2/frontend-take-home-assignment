import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

const component = shallow(<Button enable={true} />);

describe('DatePicker', () => {
  it('renders', () => {
    expect(component.exists()).toEqual(true);
  });

  it(`Check if the button is active as enable prop is true`, () => {
    expect(component.prop('disabled')).toBe(false);
  });

  it('snapshotShot', () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
