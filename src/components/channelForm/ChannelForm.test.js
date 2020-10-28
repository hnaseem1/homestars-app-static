import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChannelForm from './ChannelForm';

configure({ adapter: new Adapter() });

describe('ChannelForm component', () => {
    it('Should render successfully', () => {
        const component = shallow(<ChannelForm />);
        expect(component.exists()).toEqual(true);
    });
});