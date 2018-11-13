export default class Restfull {

	static get(url, params = {}) {
		console.log(params);
		return new Promise((resolve, reject) => {
			HTTP.call('GET', url, { params }, (err, res) => {
				if (err || !res) {
					console.log(err);
					reject(err);
					// throw new Error(err);
				}
				resolve(res);
			});
		});
	}

	static post(url, params = {}) {
		console.log(params);
		return new Promise((resolve, reject) => {
			HTTP.call('POST', url, { params }, (err, res) => {
				if (err || !res) {
					console.log(err);
					reject(err);
					// throw new Error(err);
				}
				resolve(res);
			});
		});
	}
}
