import React from 'react';
import { TextField } from '@material-ui/core';

class Forms {
	constructor() {

	}

	getForm(fields = {}, data = {}) {
		const formFields = [];
		Object.keys(fields).forEach((field) => {
			fields[field].value = data[field];
			formFields.push(this.getInput(field, fields[field]));
		});
		return formFields;
	}

	getInput(inputName, props) {
		const inputType = props.type;
		switch (inputType) {
			case 'text':
				return <TextField {...props} />;
			default:
				return <div>
					<label htmlFor={inputName}>{props.label}</label>
					<input name={inputName} value={props.value} />
				</div>
		}
	}
}

export default new Forms();
