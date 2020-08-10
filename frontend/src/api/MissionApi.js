import Axios from "axios";

const requestAllMission = (callback, errorCallback) => {
    Axios.get('http://localhost:8080/sns201/mission/all')
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 전체 미션 리스트 불러오기

const requestMissionByMember = (data, callback, errorCallback) => {
    Axios.get('http://localhost:8080/sns201/mission/member/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 특정 사용자가 진행중인 미션 리스트

const requestMissionDetail = (data, callback, errorCallback) => {
    Axios.get('http://localhost:8080/sns201/mission/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 미션 상세정보 반환

const requestMissionRegister = (data, callback, errorCallback) => {
    Axios.post('http://localhost:8080/sns201/mission', data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 새로운 미션 정보 입력

const MissionApi = {
    requestAllMission: (callback, errorCallback) => requestAllMission(callback, errorCallback),
    requestMissionByMember: (data, callback, errorCallback) => requestMissionByMember(data, callback, errorCallback),
    requestMissionRegister: (data, callback, errorCallback) => requestMissionRegister(data, callback, errorCallback),
    requestMissionDetail: (data, callback, errorCallback) => requestMissionDetail(data, callback, errorCallback),
}

export default MissionApi
