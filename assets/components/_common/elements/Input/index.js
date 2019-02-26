import React from 'react'
import { Container } from './styled'
type InputProps = {
    type: string,
    placeholder: string,
    id: string,
    value: string,
    isRequired?: boolean,
    error?: boolean,
    onChange?: Function,
    tabIndex: string,
    middlewareValidator?: Function,
    className: string,
}

class Input extends React.Component<InputProps> {
    state = { isFocus: false, value: '' }

    Focus = event => {
        this.setState({ isFocus: true })
    }

    Blur = event => {
        if (event.target.value === '') this.setState({ isFocus: false })
    }

    Change = event => {
        if (this.props.middlewareValidator === undefined || this.props.middlewareValidator(event)) {
            //this.setState({ value: event.target.value });
            this.props.onChange(event);
        }
    }
   
    render() {
        return (
            <Container
                className={`${this.props.className} ${(this.state.isFocus || this.props.value) ? 'animate' : ''} ${
                    this.props.error ? 'invalid' : ''
                    }`}
            >
                <input
                    autoComplete={this.props.autocomplete}
                    type={this.props.type}
                    id={this.props.id}
                    onFocus={this.Focus}
                    name={this.props.name}
                    onBlur={this.Blur}
                    onChange={this.Change}
                    value={this.props.value ? this.props.value : ''}
                    className="sh-control"
                    tabIndex={this.props.tabIndex}
                    min={this.min}
                    max={this.max}
                    pattern={this.pattern}
                />
                <label
                    htmlFor={this.props.id}
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

export default Input
