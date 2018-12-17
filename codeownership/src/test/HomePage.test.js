import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import HomePage from "../HomePage/HomePage";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("HomePage component", () => {
    test("HomePage didMount", () => {
        // sinon.spy(HomePage, 'componentDidMount()');
        const wrapper = mount(<HomePage />);
        expect(wrapper.exists('.sidenav')).to.equal(true);
        console.log(wrapper);
        // expect(HomePage.componentDidMount).to.have.property('callCount', 1);
    })
})
