import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'react-komposer';
import Forms from '/imports/api/forms/forms';
import SchoolsController from '/imports/api/schools/controller'

class SchoolEdit extends Component {

	state = { updatedTimes: 0 };

	getForms = (school) => {
		const { state: { updatedTimes }, updateForm } = this;
		const fields = {
			...SchoolsController.getEditFormFields(),
      render: {
        updatedTimes,
				updateForm: updateForm,
			},
		};
		return Forms.getForm(fields, school);
	};

	updateForm = () => this.setState({ updatedTimes: this.state.updatedTimes++ });

	render() {
		const { school } = this.props;
		return (<div>
			{this.getForms(school)}
			{Forms.getActions({ save: SchoolsController.setSchool })}
		</div>);
	}
}

function postDataLoader(props, onData) {
	SchoolsController.getSchool(props.match.params.id).then((res) => {
		if (res && res.data) {
			const data = { school: res.data };
			onData(null, data)
		}
	})
}

export default withRouter(compose(postDataLoader)(SchoolEdit));