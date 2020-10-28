import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChannelMessage from './ChannelMessages';

configure({ adapter: new Adapter() });

describe('SendMessage component', () => {
    it('Should render successfully', () => {
        const component = shallow(<ChannelMessage />);
        expect(component.exists()).toEqual(true);
    });
});