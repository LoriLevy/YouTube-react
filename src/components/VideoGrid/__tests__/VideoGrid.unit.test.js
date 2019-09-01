import React from "react";
import { shallow } from "enzyme";
import { VideoGrid } from "../VideoGrid";

descibe("VideoGrid", () => {
  test("renders without props", () => {
    const wrapper = shallow(<VideoGrid />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with a title prop", () => {
    const wrapper = shallow(<VideoGrid title="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders without a divider", () => {
    const wrapper = shallow(<VideoGrid hideDivider={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});