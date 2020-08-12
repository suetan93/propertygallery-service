import React from 'react';
import axios from 'axios';
import TitleBar from './TitleBar.jsx';
import Gallery from './Gallery.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
      images: [],
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
    this.setState({ property: listing.data, images: listing.data.photos });
  }

  render() {
    const { property } = this.state;
    const { images } = this.state;

    return (
      <div>
        <br />
        <TitleBar listing={property} />
        <br />
        {images.length > 0 ? <Gallery images={images} /> : null}
      </div>
    );
  }
}

export default Header;
