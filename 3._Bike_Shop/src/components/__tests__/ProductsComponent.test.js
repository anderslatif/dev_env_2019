import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductsComponent from '../ProductsComponent';
import testProducts from '../testProducts';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ProductsComponent can render', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<ProductsComponent products={[]}/>).contains(<div className="products__component">
            <div className="products__component--wrapper"></div></div>)).toBe(true);
    });

    it('should render the products"', function() {
        expect(shallow(<ProductsComponent products={testProducts} />).is(<div className="products__component">
            <div className="products__component--wrapper"></div></div>)).toBe(false);
    });

    it('should mount in a full DOM of all test products', function() {
        expect(mount(<ProductsComponent products={testProducts} />).find('.product__individual').length).toBe(testProducts.length);
    });

});


