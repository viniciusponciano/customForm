import React from 'react';
import TextFieldInput from '/imports/ui/components/TextFieldInput';
import ActionButtons from '/imports/ui/components/ActionButtons';

class Forms {
	constructor() {
		this.formDocument = {};
		this.validateDocument = {};
	}

	getForm(fields = {}, data = {}) {
		const formFields = [];
		Object.keys(fields).forEach((field) => {
			fields[field].value = data[field];
			this.formDocument[field] = data[field];
			this.validateDocument[field] = !fields[field].required || data[field];
			formFields.push(this.getInput(field, fields[field]));
		});
		return formFields;
	}

	getInput(inputName, props) {
		const inputType = props.type;
		switch (inputType) {
			case 'text':
				return <TextFieldInput {...props} form={this.formDocument} validate={this.validateDocument}/>;
			default:
				return <div>
					<label htmlFor={inputName}>{props.label}</label>
					<input name={inputName} value={props.value} />
				</div>
		}
	}

	getActions(props) {
		return <ActionButtons {...props} form={this.formDocument} validate={this.validateDocument} />
	}
}

export default new Forms();
