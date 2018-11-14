import { HTTP } from 'meteor/http';
import { WebApp } from 'meteor/webapp';

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

	static post(url, data = {}) {
		console.log(data);
		return new Promise((resolve, reject) => {
			HTTP.call('POST', url, { data, content: data, query: data, params: data, body: { data } }, (err, res) => {
				if (err || !res) {
					console.log(err);
					reject(err);
					// throw new Error(err);
				}
				resolve(res);
			});
		});
	}

	static listener(url, executer) {
    WebApp.connectHandlers.use(url, (req, res, next) => {
    	const retorno = executer(req, res);
    	if (retorno) {
        res.writeHead(200);
        res.end('Saved!');
      } else {
        res.writeHead(500);
        res.end('error!')
      }
    });
  }
}
