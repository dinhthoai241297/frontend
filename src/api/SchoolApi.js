import request from 'superagent';
import { HOST } from './../contants/index';

class SchoolApi {
    static getAll(data) {
        return request.post(`${HOST}frontend/school/search`).send({ data });
    }

    static getOne(data) {
        return request.post(`${HOST}frontend/school/getid`).send({ data });
    }
}

export default SchoolApi;