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
// 팔로우 버튼을 눌렀을때 내가 상대방을 팔로우
const requestFollowRegister = (data,callback,errorCallback) => {
    Axios.post('http://localhost:8080/sns201/follow', data)
    .then(res => callback(res))
    .catch(error => errorCallback(error))
}
// 언팔로우 버튼을 눌렀을 때 내가 상대방을 언팔로우
// 나를 follow 하는 사용자의 리스트
const requestAllFollowerByNo = (data, callback, errorCallback) => {
    Axios.get("http://localhost:8080/sns201/follow/all/follower/" +data)
    .then((res) => callback(res))
    .catch((error) => errorCallback(error));
}
// 내가 follow 하는 사용자의 리스트 
const requestAllFollowingByNo = (data, callback, errorCallback) => {
    Axios.get("http://localhost:8080/sns201/follow/all/following/" +data)
    .then((res) => callback(res))
    .catch((error) => errorCallback(error));
}
const FollowApi = {
    requestCountFollower:(data,callback,errorCallback)=>requestCountFollower(data,callback,errorCallback),
    requestCountFollowing:(data,callback,errorCallback)=>requestCountFollowing(data,callback,errorCallback),
    requestFollowRegister:(data,callback,errorCallback)=>requestFollowRegister(data,callback,errorCallback),
    requestAllFollowerByNo:(data,callback,errorCallback)=>requestAllFollowerByNo(data,callback,errorCallback),
    requestAllFollowingByNo:(data,callback,errorCallback)=>requestAllFollowingByNo(data,callback,errorCallback)
}

export default FollowApi
