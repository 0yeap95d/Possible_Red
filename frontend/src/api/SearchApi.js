import Axios from "axios";

const requestCategory = (callback, errorCallback) => {
    Axios.get('http://i3d201.p.ssafy.io:8080/sns201/category')
        .then(res => callback(res))
        .catch(error => errorCallback(error))
};

const requestMissionByCategory = (data, callback, errorCallback) => {
    Axios.get('http://i3d201.p.ssafy.io:8080/sns201/mission/category/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const SearchApi = {
    requestCategory: (data, callback, errorCallback) => requestCategory(data, callback, errorCallback),
    requestMissionByCategory: (data, callback, errorCallback) => requestMissionByCategory(data, callback, errorCallback),
};

export default SearchApi