import React, { Component } from 'react';
import { compose } from 'react-komposer';
import { CircularProgress } from '@material-ui/core';
import Forms from '/imports/api/forms/forms';
import Schools from '/imports/api/schools/schools'

class SchoolList extends Component{

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

	render () {
		const { schools, show } = this.props;
		if (!schools || !show) {
			return <CircularProgress />
		}
		return (
			<div>
				Pronto
				{schools.map(this.getForms)}
			</div>
		);
	}
}

function postDataLoader(props, onData) {
	Schools.getAllDistrictSchools('CA').then((res) => {
		if (res && res.data) {
			const data = { schools: res.data.schoolList, show: true };
			onData(null, data)
		}
	})
}

export default compose(postDataLoader)(SchoolList);