import React from 'react';
import TitleBar from './TitleBar.jsx';
import Gallery from './Gallery.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <br />
        <TitleBar />
        <br />
        <Gallery />
      </div>
    );
  }
}

export default Header;
