import React from 'react';
import axios from 'axios';
import TitleBar from './TitleBar.jsx';
import Gallery from './Gallery.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
    };

    this.getListing = this.getListing.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    axios.get('/property/15')
      .then(this.updateState)
      .catch(console.log);
  }

  updateState(listing) {
    this.setState({ property: listing.data });
  }

  render() {
    const { property } = this.state;
    const { photos } = this.state.property;

    return (
      <div>
        <br />
        <TitleBar listing={property} />
        <br />
        <Gallery images={photos} />
      </div>
    );
  }
}

export default Header;
