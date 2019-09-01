import React from "react";
import { shallow } from "enzyme";
import { VideoGridHeader } from "../VideoGridHeader";

describe("VideoGridHeader", () => {
  test("renders without props", () => {
    const wrapper = shallow(<VideoGridHeader />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders with empty string title", () => {
    const wrapper = shallow(<VideoGridHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders with a title", () => {
    const wrapper = shallow(<VideoGridHeader title="Antique Dolls" />);
    expect(wrapper).toMatchSnapshot();
  });
});
