import request from 'superagent';
import { HOST } from './../contants/index';

class SubjectGroupApi {

    static getAll(data) {
        return request.post(`${HOST}admin/subjectgroup/getall`).send({ data });
    }

}

export default SubjectGroupApi;