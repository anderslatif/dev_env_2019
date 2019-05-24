/*eslint-disable*/
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AdminPage from "../pages/AdminPage";
import AdminViewOrdersPage from "../pages/AdminViewOrdersPage";

Enzyme.configure({
    adapter: new Adapter()
});

describe("Admin", () => {
    it("Should render both main componens", () => {
        const wrapper = shallow(<AdminPage />);
        wrapper.setState({ adminSelectComponentState: true })
        expect(wrapper.find(".admin__page--wrapper").length).toBe(1);
    });

    it("Should return 2 available orders", () => {
        const wrapper = shallow(<AdminViewOrdersPage />);
        expect(wrapper.find(".display__orders--wrapper").length).toBe(1);
    });
});







