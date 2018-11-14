import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'react-komposer';
import Forms from '/imports/api/forms/forms';
import Schools from '/imports/api/schools/schools'

class SchoolEdit extends Component {

	state = { updatedTimes: 0 };

	getForms = (school) => {
		const { state: { updatedTimes }, updateForm } = this;
		const fields = {
			...Schools.getEditFormFields(),
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
			{Forms.getActions({ save: Schools.setSchool })}
		</div>);
	}
}

function postDataLoader(props, onData) {
	Schools.getSchool(props.match.params.id).then((res) => {
		if (res && res.data) {
			const data = { school: res.data };
			onData(null, data)
		}
	})
}

export default withRouter(compose(postDataLoader)(SchoolEdit));