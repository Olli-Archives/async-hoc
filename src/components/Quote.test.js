import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', ()=>{
  it('renders character image, title, and quote', ()=>{
    const wrapper = shallow(<Quote image='test-image' character='bender' quote='test quote'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
