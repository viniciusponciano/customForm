import React, { Component } from 'react';
import { compose } from 'react-komposer';
import Forms from '/imports/api/forms/forms';
import Schools from '/imports/api/schools/schools'

class SchoolEdit extends Component {

	getForms = (school) => {
		const fields = {
			schoolid: {
				required: true,
				id: 'schoolid',
				label: 'ID',
				value: '',
				margin: 'normal',
			},
			schoolName: {
				type: 'text',
				required: false,
				id: 'schoolName',
				label: 'Name',
				value: '',
				margin: 'normal',
			},
		};
		return Forms.getForm(fields, school);
	};

	render() {
		const { school } = this.props;
		return this.getForms(school);
	}
}

function postDataLoader(props, onData) {
	Schools.getSchool(props.schoolId).then((res) => {
		if (res && res.data) {
			const data = { school: res.data };
			onData(null, data)
		}
	})
}

export default compose(postDataLoader)(SchoolEdit);