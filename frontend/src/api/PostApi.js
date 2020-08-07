import Axios from "axios";

const requestSelectPost = (callback,errorCallback) => {
    
    Axios.get('http://localhost:8080/sns201/post/all')
    .then(res => callback(res))
    .catch(error => errorCallback(error))
}

const requestSelectPostByNo = (data,callback,errorCallback) => {

    Axios.get('http://localhost:8080/sns201/post' + data)
    .then(res => callback(res))
    .catch(error => errorCallback(error))
}

const PostApi = {
    requestSelectPost:(data,callback,errorCallback)=>requestSelectPost(data,callback,errorCallback),
    requestSelectPostByNo:(data,callback,errorCallback)=>requestSelectPostByNo(data,callback,errorCallback)
}

export default PostApi