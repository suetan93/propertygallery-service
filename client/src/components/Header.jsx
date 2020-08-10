import React from 'react';
import TitleBar from './TitleBar.jsx';

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
      </div>
    );
  }
}

export default Header;
