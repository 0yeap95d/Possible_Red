import Login from "./views/user/Login.vue";
import Join from "./views/user/Join.vue";
import FeedMain from "./views/feed/IndexFeed.vue";
import Components from "./views/Components.vue";
import FindPwd from "./views/user/FindPwd.vue";
import ChangePwd from "./views/user/ChangePwd.vue";
import ChangeUser from './views/user/ChangeUser.vue'
import Terms from "./views/user/Terms.vue";
import Search from "./views/search/Search.vue";
import Posts from "./views/post/Posts.vue";
import Comments from "./views/post/Comments.vue";
import MissionAdd from "./views/mission/MissionAdd.vue";
import UserProfile from './views/profile/UserProfile.vue';

export default [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/user/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/feed/main",
    name: "FeedMain",
    component: FeedMain,
  },
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
  {
    path: "/findpwd",
    name: "FindPwd",
    component: FindPwd,
  },
  {
    path: "/changepwd",
    name: "ChangePwd",
    component: ChangePwd,
  },
  {
    path : '/changeuser',
    name : 'ChangeUser',
    component : ChangeUser,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/comments",
    name: "Comments",
    component: Comments,
  },
  {
    path: "/missionadd",
    name: "MissionAdd",
    component: MissionAdd,
  },
  {
    path : '/profile',
    name : 'UserProfile',
    component : UserProfile
  },
];
