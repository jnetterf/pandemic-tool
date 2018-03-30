// @flow

import React from "react";

import { CITY_TO_COLOR } from "./data";

export default class City extends React.Component {
  props: {
    name: string,
    onRemove: () => void
  };

  render() {
    const { name, onRemove } = this.props;
    const color = CITY_TO_COLOR[name] || "grey";

    return (
      <div style={{ color }}>
        {name}{" "}
        <a href="javascript:void(0);" onClick={onRemove}>
          x
        </a>
      </div>
    );
  }
}
