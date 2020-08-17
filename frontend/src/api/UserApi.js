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

    Axios.post('http://i3d201.p.ssafy.io:8080/login', params)
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

    Axios.post('http://i3d201.p.ssafy.io:8080/member', params)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const requestUpdate = (data, callback, errorCallback) => {
    console.log(data);
    Axios.put('http://i3d201.p.ssafy.io:8080/member', data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const requestEmailCheck = (data, callback, errorCallback) => {
    Axios.get('http://i3d201.p.ssafy.io:8080/member/email/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const requestMemberByNo = (data, callback, errorCallback) => {
    // 사용자의 상세 정보를 반환한다.
    Axios.get('http://i3d201.p.ssafy.io:8080/member/' + data)
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
