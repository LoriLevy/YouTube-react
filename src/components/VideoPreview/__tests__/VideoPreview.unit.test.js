import React from "react";
import { shallow } from "enzyme";
import { VideoPreview } from "../VideoPreview";

describe(VideoPreview, () => {
  test("it renders vertically", () => {
    const wrapper = shallow(<VideoPreview/>);
    expect(wrapper).toMatchSnapshot();
  });
  test("it renders horizontally", () => {
    const wrapper = shallow(<VideoPreview horizontal={true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
