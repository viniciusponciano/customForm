import Restfull from "../restfull";

class School {
	constructor() {
		this.params = {
			appID: '8de4bbb0',
			appKey: 'e7821e05510a401a88bcec9970921577',
		};
		this.editFormFields = {
      schoolid: {
        required: true,
        id: 'schoolid',
        label: 'ID',
        value: '',
        margin: 'normal',
      },
      schoolName: {
        type: 'text',
        required: true,
        id: 'schoolName',
        label: 'Name',
        value: '',
        margin: 'normal',
      },
      schoolLevel: {
        type: 'text',
        id: 'schoolLevel',
        label: 'Level',
        value: '',
        margin: 'normal',
      },
      highGrade: {
        type: 'text',
        id: 'highGrade',
        label: 'High grade',
        value: '',
        margin: 'normal',
      },
    };
	}

	getEditFormFields() {
		return this.editFormFields;
	}

	getAllDistrictSchools(stateUS) {
		const urlAPI = 'https://api.schooldigger.com/v1/schools';
		const params = {
			st: stateUS,
			...this.params,
		};
		return Restfull.get(urlAPI, params);
	}

	getSchool(schoolId) {
		const urlAPI = `https://api.schooldigger.com/v1/schools/${schoolId}`;
		return Restfull.get(urlAPI, this.params);
	}

	setSchool(school) {
		const urlAPI = 'http://localhost:3000/post/school';
		const params = { data: school };
		return Restfull.post(urlAPI, params);
	}
}

export default new School();