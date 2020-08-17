import React from 'react';
import axios from 'axios';
import TitleBar from './TitleBar.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
      images: [],
      showModal: false,
      saved: false,
    };

    this.updateState = this.updateState.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    axios.get('/property/26')
      .then(this.updateState)
      .catch(console.log);
  }

  updateState(listing) {
    this.setState({ property: listing.data, images: listing.data.photos });
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { property, images, showModal } = this.state;

    return (
      <div>
        <br />
        <TitleBar listing={property} />
        <br />
        {images.length > 0 ? (
          <Gallery
            images={images}
            modalState={showModal}
            toggleModal={this.toggleModal}
          />
        )
          : null}
        {images.length > 0 ? (
          <Modal
            showModal={showModal}
            toggleModal={this.toggleModal}
            images={images}
          />
        ) : null}
      </div>
    );
  }
}

export default Header;
