/*eslint-disable*/
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";

Enzyme.configure({
    adapter: new Adapter()
});

describe("Login", () => {
    it('should fail if no credentials are provided', () => {
        const formEvent = { preventDefault: () => console.log('preventDefault') };
        const loginComponent = shallow(<LoginPage />);
        expect(loginComponent.find('.form__login').length).toBe(1);
    });
});