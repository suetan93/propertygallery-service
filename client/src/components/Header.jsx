import React from 'react';
import axios from 'axios';
import TitleBar from './TitleBar.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';
import Info from './Info.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
      images: [],
      showModal: false,
      photoIndex: 0,
      saved: false,
    };

    this.updateState = this.updateState.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleSaved = this.toggleSaved.bind(this);
    this.alert = this.alert.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.previousPhoto = this.previousPhoto.bind(this);
    this.clickPhoto = this.clickPhoto.bind(this);
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    axios.get(`/property/${id}`)
      .then(this.updateState)
      .catch(console.log);
  }

  updateState(listing) {
    this.setState({ property: listing.data, images: listing.data.photos });
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal, photoIndex: 0 });
  }

  toggleSaved(e) {
    e.preventDefault();
    this.setState({ saved: !this.state.saved });
  }

  alert(e) {
    e.preventDefault();
    alert('Link copied!');
  };

  nextPhoto(e) {
    e.preventDefault();
    let lastIndex = this.state.images.length;
    if (this.state.photoIndex + 1 !== lastIndex) {
      this.setState({ photoIndex: this.state.photoIndex + 1 });
    } else {
      this.setState({ photoIndex: 0 });
    }
  }

  previousPhoto(e) {
    e.preventDefault();
    if (this.state.photoIndex - 1 >= 0) {
      this.setState({ photoIndex: this.state.photoIndex - 1 });
    } else {
      this.setState({ photoIndex: this.state.images.length - 1 });
    }
  }

  clickPhoto(e) {
    e.preventDefault();
    this.setState({ photoIndex: Number(e.target.alt), showModal: !this.state.showModal })
  }

  render() {
    const { property, images, showModal, saved, photoIndex } = this.state;

    return (
      <div>
        <br />
        <TitleBar
          listing={property}
          toggleSaved={this.toggleSaved}
          savedState={saved}
          alert={this.alert}
        />
        <br />
        {images.length > 0 ? (
          <Gallery
            images={images}
            modalState={showModal}
            toggleModal={this.toggleModal}
            clickPhoto={this.clickPhoto}
          />
        )
          : null}
        {images.length > 0 ? (
          <Modal
            showModal={showModal}
            toggleModal={this.toggleModal}
            images={images}
            toggleSaved={this.toggleSaved}
            savedState={saved}
            alert={this.alert}
            photoIndex={photoIndex}
            nextPhoto={this.nextPhoto}
            previousPhoto={this.previousPhoto}
          />
        ) : null}
        <br />
        <Info />
      </div>
    );
  }
}

export default Header;
