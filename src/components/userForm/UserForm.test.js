import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserForm from './UserFrom';

configure({ adapter: new Adapter() });

describe('UserForm component', () => {
    it('Should render successfully', () => {
        const component = shallow(<UserForm />);
        expect(component.exists()).toEqual(true);
    });
});