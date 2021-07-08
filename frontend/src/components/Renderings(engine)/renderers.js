import Image from '../Character/Skins/c1.png';
import React, { PureComponent } from "react";

class Box extends PureComponent {
  render() {
    const size = 32;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundImage: `url(${Image})`, left: x, top: y }} />
    );
  }
}

export { Box };
