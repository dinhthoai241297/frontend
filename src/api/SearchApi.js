import request from 'superagent';
import { HOST } from './../contants/index';

class SearchApi {
    static getOneCode(data) {
        return request.post(`${HOST}school/getonecode`).send({ data });
    }

    static getOneName(data) {
        return request.post(`${HOST}school/getonename`).send({ data });
    }
}

export default SearchApi;