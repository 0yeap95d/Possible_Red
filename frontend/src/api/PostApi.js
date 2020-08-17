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
    Axios.post("http://i3d201.p.ssafy.io:8080/sns201/post", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((res) => callback(res))
        .catch((error) => errorCallback(error));
};
const requestPostUpdate = (data, callback, errorCallback) => {
    Axios.put('http://i3d201.p.ssafy.io:8080/sns201/post', data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 포스트 업데이트

const requestPostDelete = (data, callback, errorCallback) => {
    Axios.delete('http://i3d201.p.ssafy.io:8080/sns201/post/' + data)
        .then(res => callback(res))
        .catch(error => errorCallback(error))
} // 포스트 삭제

const PostApi = {
    requestSelectPost: (data, callback, errorCallback) =>
        requestSelectPost(data, callback, errorCallback),
    requestSelectPostByNo: (data, callback, errorCallback) =>
        requestSelectPostByNo(data, callback, errorCallback),
    requestInsertPost: (data, callback, errorCallback) =>
        requestInsertPost(data, callback, errorCallback),
    requestPostUpdate: (data, callback, errorCallback) =>
        requestPostUpdate(data, callback, errorCallback),
    requestPostDelete: (data, callback, errorCallback) =>
        requestPostDelete(data, callback, errorCallback),
};

export default PostApi;
