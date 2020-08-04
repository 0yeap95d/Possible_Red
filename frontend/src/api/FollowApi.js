import Axios from "axios";

// 나를 follow 하는 사용자의 수
const requestCountFollower = (data,callback,errorCallback) => {
    Axios.get('http://localhost:8080/sns201/follow/follower/' + data, data)
    .then(res => callback(res))
    .catch(error => errorCallback(error))
}

// 내가 follow 하는 사용자의 수
const requestCountFollowing = (data,callback,errorCallback) => {
    Axios.get('http://localhost:8080/sns201/follow/following/' + data, data)
    .then(res => callback(res))
    .catch(error => errorCallback(error))
}

const FollowApi = {
    requestCountFollower:(data,callback,errorCallback)=>requestCountFollower(data,callback,errorCallback),
    requestCountFollowing:(data,callback,errorCallback)=>requestCountFollowing(data,callback,errorCallback),
}

export default FollowApi
