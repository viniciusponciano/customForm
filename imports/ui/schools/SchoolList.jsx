import React, { Component } from 'react';
import { compose } from 'react-komposer';
import { CircularProgress, Typography } from '@material-ui/core';
import Schools from '/imports/api/schools/schools'

class SchoolList extends Component{

	render () {
		const { schools, show } = this.props;
		if (!schools || !show) {
			return <CircularProgress />
		}
		return (
			<div>
				Pronto
				{schools.map(({ schoolName, schoolid }) => (
					<Typography variant="paragraph">{schoolid} - {schoolName}</Typography>
				))}
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