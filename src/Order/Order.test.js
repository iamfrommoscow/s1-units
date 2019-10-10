import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order component', () => {
  
    it('render with default state: snapshot test', () => {
        const wrapper = shallow(<Order key={0} order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('order empty items list', ()=>{
        const order = fakeOrders[0];
        order.items = [];
        const wrapper = shallow(<Order key={0} order={order}/>);
        expect(wrapper).toEqual({});
    });
});