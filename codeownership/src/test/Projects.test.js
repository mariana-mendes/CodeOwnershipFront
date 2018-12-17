import React from "react";
import Enzyme, { shallow, mount } from enzyme;
import Projects from "./Projects/Projects";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Projects component", () => {
    test("renders", () => {
        const w = shallow(<Table/>);
        expect(w.exists().toBe(true));
    })
})
