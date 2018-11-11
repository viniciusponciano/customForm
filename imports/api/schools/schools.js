import Restfull from "../restfull";

class School {
	constructor() {
		this.params = {
			appID: '8de4bbb0',
			appKey: 'e7821e05510a401a88bcec9970921577',
		};
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
}

export default new School();