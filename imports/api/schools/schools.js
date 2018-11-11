import Restfull from "../restfull";

class School {
	constructor() {

	}

	getAllDistrictSchools(stateUS) {
		const urlAPI = 'https://api.schooldigger.com/v1/schools';
		const params = {
			st: stateUS,
			appID: '8de4bbb0',
			appKey: 'e7821e05510a401a88bcec9970921577',
		};
		return Restfull.get(urlAPI, params);
	}
}

export default new School();