import React, { Component } from 'react';
import { compose } from 'react-komposer';
import {
	CircularProgress,
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
} from '@material-ui/core';
import { ExpandLess, ExpandMore, Business, Computer } from '@material-ui/icons';
import Schools from '/imports/api/schools/schools';

class SchoolList extends Component{

	state = {};

	onClick = schoolId => this.context.router.history.push(`/edit/${schoolId}`);

	getItem = school => {
		const address = school.address.html.replace('<br />', ' ');
		return (<div key={school.schoolid}>
			<ListItem button dense onClick={() => this.onClick(school.schoolid)}>
				<ListItemIcon>
					{school.isVirtualSchool === 'Yes' ? <Computer/> : <Business/>}
				</ListItemIcon>
				<ListItemText
					primary={school.schoolid}
					secondary={school.schoolName}
					inset
				/>
				<ListItemSecondaryAction onClick={() => this.setState({[school.schoolid]: !this.state[school.schoolid]})}>
					{this.state[school.schoolid] ? <ExpandLess/> : <ExpandMore/>}
				</ListItemSecondaryAction>
			</ListItem>
			<Collapse in={this.state[school.schoolid]} timeout="auto" unmountOnExit style={{padding: '10px 50px'}}>
				<Typography variant="body1" gutterBottom>{address}</Typography>
				<a href={school.url}><Typography variant="body1" gutterBottom>{school.url}</Typography></a>
			</Collapse>
		</div>);
	};

	render () {
		const { schools, show } = this.props;
		if (!schools || !show) {
			return <CircularProgress />
		}
		return (
			<List>
				{schools.map(this.getItem)}
			</List>
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