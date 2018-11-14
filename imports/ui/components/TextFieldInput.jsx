import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class TextFieldInput extends Component {
	constructor(props) {
		super(props);
		this.state = { value: props.value };
	}

	onChange = (event) => {
		const { value } = event.target;
		this.setState({ value });
	};

	onBlur = () => {
		const { required, errorText, label, form, validate, name, updateForm } = this.props;
		const { value } = this.state;
		let { helperText, error } = this.state;
		if (required && !value) {
			error = true;
			helperText = errorText || `This field ${label} is required`;
			validate[name] = false;
		} else {
			error = false;
			helperText = '';
			validate[name] = true;
			form[name] = value;
		}
		this.setState({ error, helperText }, () => updateForm());
	};

	onFocus = () => {
		const	error = false;
		const helperText = '';
		this.setState({ error, helperText });
	};

	render() {
		const { updatedTimes, updateForm, readOnly, ...props } = this.props;
		if (readOnly) {
			return (<TextField {...props} InputProps={{ readOnly: true }} />);
		}
		return (<TextField {...props} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} {...this.state} />);
	}
}

export default TextFieldInput;