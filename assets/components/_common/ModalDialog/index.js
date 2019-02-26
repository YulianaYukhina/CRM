import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'


const customStyles = {
  content: {
    top: 'calc(100% - 90vh)',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0)',
    padding: '8px',
    border: '0',
    overflow: 'hide'
    //background: 'transparent',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: '9999'
  },
}

Modal.setAppElement('#root')

class ModalDialog extends React.Component {

  render() {
    var {
      show,
      onHide,
      ...rest
    } = this.props;
    return (
      <Modal
        isOpen={show}
        onRequestClose={onHide}
        style={customStyles}
        {...rest}
      />
    )
  }
}


ModalDialog.props = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
}
export default ModalDialog