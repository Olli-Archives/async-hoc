import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character Component', ()=>{
  it('renders a character with name, status, species, and image ', ()=>{
    const wrapper = shallow(<Character name='rick' status='alive' species='human' image='test-image'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
