<template>
    <div id="kakao-login">

        <button @click="kakaoLogin">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 55 55">
                <g id="그룹_247" data-name="그룹 247" transform="translate(-237 -406)">
                    <g id="구성_요소_2" data-name="구성 요소 2" transform="translate(237 406)">
                        <g id="타원_6" data-name="타원 6" fill="#ffd800" stroke="#eee" stroke-width="1">
                            <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
                            <circle cx="27.5" cy="27.5" r="27" fill="none"/>
                        </g>
                    </g>
                    <g id="kakaotalk_1_" data-name="kakaotalk (1)" transform="translate(254 424)">
                        <path
                            id="패스_288"
                            data-name="패스 288"
                            d="M76.01,74.216h1.229l-.615-1.746Z"
                            transform="translate(-68.211 -65.034)"/>
                        <path
                            id="패스_289"
                            data-name="패스 289"
                            d="M10.671,0C4.777,0,0,3.767,0,8.414c0,3,2,5.643,5,7.129-.163.563-1.051,3.626-1.086,3.867,0,0-.022.181.1.249a.322.322,0,0,0,.254.015c.337-.047,3.9-2.546,4.515-2.976a13.5,13.5,0,0,0,1.89.128c5.894,0,10.671-3.767,10.671-8.414S16.565,0,10.671,0ZM5.39,7.108c-.013,1.19.01,2.442-.009,3.614-.006.375-.222.486-.513.593a.193.193,0,0,1-.1.007c-.333-.066-.6-.185-.607-.6-.024-1.171.007-2.425-.009-3.615-.282-.011-.684.011-.946,0a.577.577,0,0,1-.6-.6.565.565,0,0,1,.606-.6c.962-.014,2.155-.014,3.117,0a.561.561,0,0,1,.605.6.578.578,0,0,1-.6.6C6.074,7.119,5.673,7.1,5.39,7.108Zm5.171,4.15a.948.948,0,0,1-.392.085.505.505,0,0,1-.513-.272l-.308-.8H7.475l-.308.8a.506.506,0,0,1-.513.272.94.94,0,0,1-.391-.085c-.17-.078-.333-.293-.147-.874L7.593,6.507A.923.923,0,0,1,8.414,5.9a.931.931,0,0,1,.821.608l1.471,3.874C10.894,10.965,10.731,11.184,10.561,11.258Zm3.111,0H11.7a.579.579,0,0,1-.59-.564V6.516a.629.629,0,0,1,1.257,0v3.617h1.308a.565.565,0,1,1,0,1.129Zm4.823-.464a.616.616,0,0,1-1.1.287L15.947,9.17l-.213.213v1.343a.616.616,0,1,1-1.231,0V6.52a.616.616,0,0,1,1.231,0v1.32l1.718-1.718a.476.476,0,0,1,.342-.137.624.624,0,0,1,.605.573.482.482,0,0,1-.134.375l-1.406,1.4,1.516,2.008a.616.616,0,0,1,.118.456Z"/>
                    </g>
                </g>
            </svg>

        </button>
    </div>
</template>

<script>

    import UserApi from '../../../api/UserApi'

    export default {
        methods: {
            kakaoLogin() {
                window.Kakao.Auth.login({
                    scope : 'account_email profile',
                    success: this.GetMe,
                });
            },

            GetMe(authObj){
                window.Kakao.API.request({
                    url:'/v2/user/me',
                    success : res => {
                        const kakao_account = res.kakao_account;

                        this.member.email = kakao_account.email;
                        this.member.memberPhoto = kakao_account.profile.profile_image_url;
                        this.member.nickname = kakao_account.profile.nickname;

                        UserApi.requestLogin(
                            this.member,
                            (res) => {
                                console.log(res);
                                if (res.status == 204) {
                                    UserApi.requestRegister(
                                        this.member,
                                        (res) => {
                                            UserApi.requestEmailCheck(
                                                this.member.email,
                                                (res) => {
                                                    this.$session.set("user", res.data);
                                                    this.$router.push("/posts");
                                                },
                                                (error) => { console.log(error) }
                                            )
                                        },
                                        (error) => { console.log(error) }
                                    )
                                }

                                else {
                                    this.$session.set("user", res.data);
                                    this.$router.push("/posts");
                                }
                            },
                            (error) => { console.log(error); }
                        )
                    },
                    fail : error => {
                        this.$router.push("/notfound");
                        console.log(error);
                    }
                })
            }
        },

        data() {
            return {
                member: {
                    email: "",
                    memberNo: 0,
                    memberPhoto: "",
                    nickname: "",
                    point: 0,
                    pwd: "",
                    stateMent: "",
                }
            }
        },
    }
</script>