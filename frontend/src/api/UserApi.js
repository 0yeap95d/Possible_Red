/*
 User API 예시
 */

import Axios from "axios";

const requestLogin = (data, callback, errorCallback) => {
    //백앤드와 로그인 통신하는 부분
    var params = {
        "email": data.email,
        "memberNo": 0,
        "nickname": "",
        "point": 0,
        "pwd": data.password,
        "stateMent": "",
    }

    console.log(data);

    Axios.post('http://localhost:8080/sns201/login', params)
        .then(res => callback(res))
        .catch(error => errorCallback(error))

}

const requestRegister = (data, callback, errorCallback) => {
    var params = {
        "email": data.email,
        "nickname": data.nickname,
        "pwd": data.pwd,
    }

    console.log(data);

    Axios.post('http://localhost:8080/sns201/member', params)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const requestUpdate = (data, callback, errorCallback) => {
    console.log(data);
    Axios.put('http://localhost:8080/sns201/member', data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const requestEmailCheck = (data, callback, errorCallback) => {
    Axios.get('http://localhost:8080/sns201/member/email/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const requestMemberByNo = (data, callback, errorCallback) => {
    Axios.get('http://localhost:8080/sns201/member/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const UserApi = {
    requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback),
    requestRegister: (data, callback, errorCallback) => requestRegister(data, callback, errorCallback),
    requestUpdate: (data, callback, errorCallback) => requestUpdate(data, callback, errorCallback),
    requestEmailCheck: (data, callback, errorCallback) => requestEmailCheck(data, callback, errorCallback),
    requestMemberByNo: (data, callback, errorCallback) => requestMemberByNo(data, callback, errorCallback),
}

export default UserApi
