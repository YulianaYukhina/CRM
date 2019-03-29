import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

class Select extends React.Component {
    state = { isFocus: false}

    Focus = event => {
        this.setState({ isFocus: true })
    }

    Blur = event => {
        if (event.target.value === '') this.setState({ isFocus: false })
    }

    render() {
        const { value, text, selectedValue, key} = this.props
        return (
            <Container
                className={`${(this.state.isFocus || selectedValue) ? 'animate' : ''} ${
                    this.props.error ? 'invalid' : ''
                    }`}
            >
                <select value={selectedValue} onChange={this.props.onChange} id={this.props.id} onFocus={this.Focus} onBlur={this.Blur} defaultValue="default_disabled">
                    <option value="default_disabled" key="default_disabled" disabled></option>
                    {this.props.data && this.props.data.map(ob => {
                        return (
                            <option value={ob[value]} key={ob[key]}>{ob[text] || ob.getText()}</option>
                        )
                    })}
                </select>
                <label
                    htmlFor={this.props.key}
                    unselectable="on"
                    className="label-for-input"
                >
                    {this.props.placeholder}
                    {this.props.isRequired ? <span className="red-star">*</span> : ''}
                </label>
                <span className="layer">!</span>
            </Container>
        )
    }
}


Select.defaultProps = {
    key: 'id',
    value: 'val',
    text: 'text',
    isRequired: false,
    error: false,
}
Select.props = {

    placeholder: PropTypes.string,
    key: PropTypes.string,
    data: PropTypes.array,
    value: PropTypes.string,
    selectedValue: PropTypes.string,
    text: PropTypes.string,
    isRequired: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Select
