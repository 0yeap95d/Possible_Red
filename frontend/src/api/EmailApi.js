import Axios from "axios";

// 메일로 보냈던 난수를 api로 같이 받아옴
const requestRandomNumber = (data, callback, errorCallback) => {
    Axios.post('http://localhost:8080/sns201/email/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
}

const EmailApi = {
    requestRandomNumber: (data, callback, errorCallback) => requestRandomNumber(data, callback, errorCallback)
}

export default EmailApi