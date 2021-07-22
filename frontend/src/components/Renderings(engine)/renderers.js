import Image from '../Character/Skins/c1.png';
import React, { PureComponent } from "react";

class User extends PureComponent {
  render() {
    const size = 32;
    const position = {x: this.props.position.x, y: this.props.position.y};
    // const animation;
    // const direction;
    return (
      <div style={{
        backgroundImage: `url(${Image})`,
        height: `${size}px`,
        width: `${size}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${x}px -${y}px`,
        position: 'absolute',
        top: position.x, 
        left: position.y,
    }} />
    );
  }
}

class Enemy extends PureComponent {
  render() {
    const size = 32;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundImage: `url(${Image})`, left: x, top: y , overflow: 'hidden'}} />
    );
  }
}

export { User, Enemy };
