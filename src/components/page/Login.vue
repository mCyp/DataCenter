<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">海战平台总体性能数据中心</div>
            <el-form :model="param" :rules="rules" class="ms-content" ref="login" label-width="0px">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            type="password"
                            placeholder="password"
                            v-model="param.password"
                            @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-coin"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                    <p class="login-tips">Tips：用户名和密码随便填。</p>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                param: {
                    username: 'admin',
                    password: '123123',
                },
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                },
            }
        },
        methods: {
            submitForm() {
                this.$refs.login.validate(valid => {
                        if (valid) {
                            this.$message.success("登录成功！");
                            console.log("save role："+this.param.username);
                            localStorage.setItem("ms-username", this.param.username);
                            this.$router.push('/');
                        } else {
                            this.$message.error("请输入账号和密码");
                            console.log('error submit!!');
                            return false;
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/img/login-bg.jpg);
        background-size: 100%;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: black;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 20px 30px;
    }
    .ms-edit{
        height: 52px;
    }
    .login-btn button {
        width: 100%;
        height: 36px;
        color: #fff;
    }
    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }
</style>