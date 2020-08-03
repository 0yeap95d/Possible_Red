

import Login from './views/user/Login.vue'
import Join from './views/user/Join.vue'
import FeedMain from './views/feed/IndexFeed.vue'
import Components from './views/Components.vue'
import FindPwd from './views/user/FindPwd.vue'
import ChangePwd from './views/user/ChangePwd.vue'
import Terms from './views/user/Terms.vue'
import Search from './views/search/Search.vue'
import Post from './views/post/post.vue'

export default [


    {
        path : '/',
        name : 'Login',
        component : Login
    },
    {
        path : '/user/join',
        name : 'Join',
        component : Join
    },
    {
        path : '/feed/main',
        name : 'FeedMain',
        component : FeedMain
    },
    {
        path : '/components',
        name : 'Components',
        component : Components
    },
    {
        path : '/findpwd',
        name : 'FindPwd',
        component : FindPwd
    },
    {
        path : '/changepwd',
        name : 'ChangePwd',
        component : ChangePwd,
    },
    {
        path : '/terms',
        name : 'Terms',
        component : Terms
    },
    {
        path : '/search',
        name : 'Search',
        component : Search
    },
    {
        path : '/post',
        name : 'Post',
        component : Post
    },
]
