import Axios from "axios";

const requestMissionByMember = (data,callback,errorCallback) => {
    Axios.get('http://localhost:8080/sns201/mission/member/' + data)
    .then(res => callback(res))
    .catch(error => errorCallback(error))
}

const MissionApi = {
    requestMissionByMember:(data,callback,errorCallback)=>requestMissionByMember(data,callback,errorCallback),
}

export default MissionApi
