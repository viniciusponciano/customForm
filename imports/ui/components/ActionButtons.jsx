import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class ActionButtons extends Component {

	valid = () => {
		const { validate } = this.props;
		return Object.keys(validate).every(field => validate[field]);
	};

	onCancel = () => {
		this.props.history.goBack();
	};

	onSave = () => {
		const { save, form } = this.props;
		save(form).then(this.afterSave);
	};

	afterSave = (res) => {
		const { afterSave } = this.props;
		if (afterSave) {
			return afterSave;
		}
		return this.onCancel;
	};

	render() {
		const { cancel } = this.props;
		return (<div>
			<Button variant="contained" color="primary" onClick={this.onSave} disabled={!this.valid()}>
        Save
      </Button>
			<Button color="secondary" onClick={cancel || this.onCancel}>
        Cancel
      </Button>
		</div>);
	}
}

export default withRouter(ActionButtons);