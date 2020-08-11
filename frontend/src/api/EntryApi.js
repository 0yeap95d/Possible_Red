import Axios from "axios";

const requestEntryRegister = (data, callback, errorCallback) => {
    Axios.post('http://localhost:8080/sns201/entry', data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 새로운 미션 정보 입력

const EntryApi = {
    requestEntryRegister: (data, callback, errorCallback) => requestEntryRegister(data, callback, errorCallback),
}

export default EntryApi
