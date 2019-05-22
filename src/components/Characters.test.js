import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', ()=>{
  const charactersArray = [{ name:'rick', status:'alive', species:'human', image:'sample-image' }];
  it('renders characters from an array or characters', ()=>{
    const wrapper = shallow(<Characters charactersArray={charactersArray}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
