import React from 'react';
import TextFieldInput from '/imports/ui/components/TextFieldInput';
import ActionButtons from '/imports/ui/components/ActionButtons';

class Forms {
	constructor() {
    this.formDocument = {};
    this.validateDocument = {};
    this.render = {};
  }

	filterVersion = fieldKey => fieldKey !== 'render';

	getForm(fields = {}, data = {}) {
    const formFields = [];
    this.render = fields.render;
    Object.keys(fields)
      .filter(this.filterVersion)
      .forEach((fieldKey) => {
        fields[fieldKey].value = data[fieldKey];
        this.formDocument[fieldKey] = data[fieldKey];
        this.validateDocument[fieldKey] = !fields[fieldKey].required || data[fieldKey];
        formFields.push(this.getInput(fieldKey, fields[fieldKey]));
      });
    return formFields;
  }

	getInput(inputName, props) {
		const inputType = props.type;
		const inputKey = `${inputType}-${inputName}`;
		switch (inputType) {
			case 'text':
				return (
				  <TextFieldInput
            key={inputKey}
            name={inputName}
            fullWidth {...props}
            form={this.formDocument}
            validate={this.validateDocument}
            {...this.render}
          />
        );
			default:
				return (<TextFieldInput key={inputKey} name={inputName} fullWidth readOnly {...props} />);
		}
	}

	getActions(props) {
		return (<ActionButtons {...props} form={this.formDocument} validate={this.validateDocument} {...this.render} />);
	}
}

export default new Forms();
