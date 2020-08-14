import Axios from "axios";

const requestSelectPost = (callback, errorCallback) => {
    Axios.get("http://i3d201.p.ssafy.io:8080/sns201/post/all")
        .then((res) => callback(res))
        .catch((error) => errorCallback(error));
};

const requestSelectPostByNo = (data, callback, errorCallback) => {
    Axios.get("http://i3d201.p.ssafy.io:8080/sns201/post/" + data)
        .then((res) => callback(res))
        .catch((error) => errorCallback(error));
};

const requestInsertPost = (data, callback, errorCallback) => {
    console.log("api에 보이는 데이터 : " + data);
    Axios.post("http://i3d201.p.ssafy.io:8080/sns201/post", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((res) => callback(res))
        .catch((error) => errorCallback(error));
};

const PostApi = {
    requestSelectPost: (data, callback, errorCallback) =>
        requestSelectPost(data, callback, errorCallback),
    requestSelectPostByNo: (data, callback, errorCallback) =>
        requestSelectPostByNo(data, callback, errorCallback),
    requestInsertPost: (data, callback, errorCallback) =>
        requestInsertPost(data, callback, errorCallback),
};

export default PostApi;
