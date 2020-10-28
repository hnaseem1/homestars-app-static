import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SendMessage from './SendMessage';

configure({ adapter: new Adapter() });

describe('SendMessage component', () => {
    it('Should render successfully', () => {
        const component = shallow(<SendMessage />);
        expect(component.exists()).toEqual(true);
    });
});