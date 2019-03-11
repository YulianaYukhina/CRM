import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import Pica from 'pica'

import Modal from '../ModalDialog'
import Button from '../elements/Button'
//import { FlexBox, FlexRow, ModalContainer } from '../../../../elements/StyleDialogs/styled'

import { Container, ModalContainer, CropperContainer, ImagePreview, PreviewContainer } from './styled'

class ModalCropper extends React.Component {

  cropImage = () => {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    var image = this.cropper.getCroppedCanvas({
      minWidth: 256,
      minHeight: 256,
      maxWidth: 4096,
      maxHeight: 4096,
    });
    var res = document.createElement('canvas');
    res.width = 130;
    res.height = 140;
    const pica = Pica();
    pica.resize(image, res, {
      unsharpAmount: 200,
      unsharpRadius: 2,
      unsharpThreshold: 255
    }).then(done => {
      this.props.saveImage(res);

    })
  }

  render() {

    const { isOpen, src } = this.props
    return (
      <Container>
        <Modal
          show={isOpen}>
          <ModalContainer>
            <PreviewContainer>
              <ImagePreview className="img-preview" />
              <div className="button-container">
                <Button onClick={this.cropImage} value="Crop Image" />
              </div>
            </PreviewContainer>
            <CropperContainer>
              <Cropper
                style={{ height: '100%', width: '100%' }}
                preview=".img-preview"
                guides={false}
                src={src}
                aspectRatio={3 / 4}
                ref={cropper => { this.cropper = cropper; }}
                scalable={false}
                zoomable={true}
                modal={true}
              />
            </CropperContainer>
          </ModalContainer>
        </Modal>
      </Container>
    );
  }
}

ModalCropper.propTypes = {
  src: PropTypes.string,
  isOpen: PropTypes.bool,
  saveImage: PropTypes.func,
}

export default ModalCropper
