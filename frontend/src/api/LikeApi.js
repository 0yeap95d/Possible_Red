import Axios from "axios";

const requestLikeList = (data, callback, errorCallback) => {
    Axios.get('http://localhost:8080/sns201/likey/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const LikeApi = {
    requestLikeList: (data, callback, errorCallback) => requestLikeList(data, callback, errorCallback),
}

export default LikeApi
