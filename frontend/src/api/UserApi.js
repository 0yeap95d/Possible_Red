/*
 User API 예시
 */

import Axios from "axios";

const requestLogin = (data,callback,errorCallback) => {
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

const requestRegister = (data,callback,errorCallback) => {
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

const UserApi = {
    requestLogin:(data,callback,errorCallback)=>requestLogin(data,callback,errorCallback),
    requestRegister:(data,callback,errorCallback)=>requestRegister(data,callback,errorCallback)
}

export default UserApi
