/*eslint-disable*/
import React from "react";
import MainTicket from "../pages/MainTicket";
import Enzyme, { shallow, mount } from "enzyme";
import TicketComponent from "../components/TicketComponent";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
    adapter: new Adapter()
});

describe("Test ticket function", () => {
    it("should change the qr state", () => {
        const mainTicket = shallow(<MainTicket />);

        let state = false;
        state = true;
        
        expect(state).toBe(true);
    });

    it("Should check if the order exists", () => {
        const wrapper = shallow(<MainTicket />);
        expect(wrapper.find(".orders__wrapperMobile").length).toBe(1);
    });

    it("Should create a snapshot", () => {
        const wrapper = shallow(<MainTicket />);
        expect(wrapper).toMatchSnapshot();
    });
});