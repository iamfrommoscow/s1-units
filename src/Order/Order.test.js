import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order component', () => {
  
    it('render with component from fakeOrders', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('order without items in list', ()=>{
        const order = fakeOrders[0];
        order.items = [];
        const wrapper = shallow(<Order order={order}/>);
        expect(wrapper).toEqual({});
    });
});