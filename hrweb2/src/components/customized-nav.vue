<template>
    <div>
        <nav>
            <div class="nav-body">
                <img @click="gotoHomeUI" :src="require('../assets/images/logo.png')"/>
                <div class="menu">
                    <div class="group" v-if="!ctlHideMenus">
                        <router-link to="/" index="1">首页</router-link>
                        <router-link to="/joblist" index="2">职位</router-link>
                        <router-link to="/resume" index="3">简历</router-link>
                        <router-link to="/personal" index="4">联系我们</router-link>
                    </div>
                    <div class="btn-set" v-if="!hasLogin">
                        <router-link tag="button" :to="{name:'login'}" index="1">登录</router-link>
                        <router-link tag="button" :to="{name:'register'}" index="2">注册</router-link>
                    </div>
                    <div class="user-operations" v-else>
                        <el-dropdown placement="bottom-start" @command="dealMenuClick">
                            <img :src="require('../assets/images/tou.png')"/>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click.native="inforchange">个人信息</el-dropdown-item>
                                <el-dropdown-item @click.native="personal">账号设置</el-dropdown-item>
                                <el-dropdown-item divided command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'customized-nav',
        props: {
            ctlHideMenus: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        computed: mapState({
            hasLogin(state) {
                return state.hasLogin;
            }
        }),
        methods: {
            gotoHomeUI() {
                this.$router.push({path: '/'});
            },
            gotoLoginUI() {
                this.$router.push({name: 'login'});
            },
            gotoRegisterUI() {
                this.$router.push({name: 'register'});
            },
            inforchange() {
                 this.$router.push({path:'/inforchange'})
            },
            personal() {
                 this.$router.push({path:'/personal'})
            },
        }
    }
</script>

<style lang="stylus" scoped>
    nav
        z-index 100
        background-color #1f368d
        box-shadow 0px 1px 9px #ccc
        width 100%
        position fixed
        top 0
        display flex
        flex-direction row
        height 70px
        align-content center
        align-items center

        .nav-body
            display flex
            flex-direction row
            align-items center
            margin auto
            width 1280px
            min-width 1024px
            height 100%

            img
                height 40
                margin 0 20px
                cursor pointer

            .menu
                display flex
                flex 1
                height 100%
                justify-content flex-end
                align-items center

                .group
                    display flex
                    height 100%
                    flex 1
                    margin 0 50px

                    a
                        width 100px
                        color white
                        text-decoration none
                        display flex
                        align-items center
                        justify-content center

                        &.router-link-exact-active
                            color #6EC5D2
                            border-bottom solid 3px #6EC5D2

                .user-operations
                    cursor pointer

                    img
                        width 50px
                        height 50px
                        border-radius 50%

                .btn-set
                    margin 0 15px

                    button
                        cursor pointer
                        font-size 15px
                        background none
                        border none
                        padding 0 13px
                        border-right solid 1px lightgrey
                        color white

                        &:last-child
                            border none
</style>
