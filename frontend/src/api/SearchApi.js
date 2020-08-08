import Axios from "axios";

const requestCategory = (callback, errorCallback) => {
    Axios.get('http://localhost:8080/sns201/category')
        .then(res => callback(res))
        .catch(error => errorCallback(error))
};

const SearchApi = {
    requestCategory: (data, callback, errorCallback) => requestCategory(data, callback, errorCallback),
};

export default SearchApi