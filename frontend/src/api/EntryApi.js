import Axios from "axios";

const requestEntryRegister = (data, callback, errorCallback) => {
    Axios.post('http://i3d201.p.ssafy.io:8080/entry', data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 새로운 미션 정보 입력

const reqeustCanIJoinThisMission = (data, callback, errorCallback) => {
    Axios.get("http://i3d201.p.ssafy.io:8080/entry/" + data.memberNo + "/" + data.missionNo)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const EntryApi = {
    requestEntryRegister: (data, callback, errorCallback) => requestEntryRegister(data, callback, errorCallback),
    reqeustCanIJoinThisMission: (data, callback, errorCallback) => reqeustCanIJoinThisMission(data, callback, errorCallback),
}

export default EntryApi
