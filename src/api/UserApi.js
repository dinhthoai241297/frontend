import request from 'superagent';
import { HOST } from './../contants/index';

class UserApi {
    static login(data) {
        return request.post(`${HOST}user/login`).send({ data });
    }

    static logout(data) {
        return request.post(`${HOST}user/logout`).send({ data });
    }

    static register(data) {
        return request.post(`${HOST}user/register`).send({ data });
    }

    static forgotPassword(data) {
        return request.post(`${HOST}user/forgotpassword`).send({ data });
    }

    static changePassword(data) {
        return request.post(`${HOST}user/changepassword`).send({ data });
    }
}

export default UserApi;