import * as React from 'react';
import { shallow } from 'enzyme';
import Input from '../index';

describe('Input', () => {
  const onChange = jest.fn();
  const component = shallow(<Input valueSetter={onChange} />);

  it('renders', () => {
    expect(component.exists()).toEqual(true);
  });
});
