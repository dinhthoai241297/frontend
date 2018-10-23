import request from 'superagent';
import { HOST } from './../contants/index';

class UserApi {
    static login(data) {
        return request.post(`${HOST}user/login`).send({ data });
    }

    static logout(data) {
        return request.post(`${HOST}user/logout`).send({ data });
    }
}

export default UserApi;