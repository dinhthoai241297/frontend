import request from 'superagent';
import { HOST } from './../contants/index';

class ProvinceApi {

    static getAll(data) {
        return request.post(`${HOST}province/getAll`).send({ data });
    }
    
}

export default ProvinceApi;