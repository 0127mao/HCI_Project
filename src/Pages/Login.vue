<template>
    <div class="body">
        <h1 class="ml1">
    <span class="text-wrapper">
      <span class="line line1"></span>
      <span class="letters">Book && Book</span>
      <span class="line line2"></span>
    </span>
        </h1>
        <div class="container" :class="{ 'right-panel-active': isRightPanelActive }">
            <!-- 注册 -->
            <div class="container__form container--signup">
                <form @submit="submitForm_register" action="#" class="form" id="form1">
                    <h2 class="form__title">Sign Up</h2>
                    <input id="uname" type="text" placeholder="用户名" v-model="ruleform_register.uname" class="input" />
                    <input id="pass" type="password" v-model="ruleform_register.pass" placeholder="密码" class="input" />
                    <input id="password" type="password" v-model="ruleform_register.password" placeholder="确认密码" class="input"/>
                    <button class="btn" type="submit" :disabled="loading_register">Sign Up</button>
                    <button class="btn" type="button" @click="resetForm('ruleform_register')">reset</button>
                </form>
            </div>

            <!-- 登录 -->
            <div class="container__form container--signin">
                <form action="#" class="form" id="form2">
                    <h2 class="form__title">Sign In</h2>
                    <input type="text" id="uname" placeholder="用户名" v-model="ruleForm.uname" class="input"/>
                    <input type="password" id="password" placeholder="密码" v-model="ruleForm.password" autocomplete="off" class="input"/>
                    <button class="btn" type="button" @click="submitForm('ruleForm')" :disabled="loading">Sign In</button>
                    <button class="btn" type="button" @click="resetForm_login('ruleForm')">reset</button>
                </form>
            </div>

            <!-- 叠加层 -->
            <div class="container__overlay">
                <div class="overlay">
                    <div class="overlay__panel overlay--left">
                        <button class="btn" @click="signIn">Sign In</button>
                    </div>
                    <div class="overlay__panel overlay--right">
                        <button class="btn" @click="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import anime from "animejs";

export default {
    mounted() {
        var textWrapper = document.querySelector('.ml1 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
            .add({
                targets: '.ml1 .letter',
                scale: [0.3,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i+1)
            })
            .add({
                targets: '.ml1 .line',
                scaleX: [0,1],
                opacity: [0.5,1],
                easing: "easeOutExpo",
                duration: 700,
                offset: '-=875',
                delay: (el, i, l) => 80 * (l - i)
            })
            .add({
                targets: '.ml1',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    },
    data() {
        var validatePass = (value) => {
            return value !== '';
        };
        var validatePass2 = (value) => {
            return value === this.ruleform_register.pass;
        };
        return {
            isRightPanelActive: false,
            ruleForm: {
                uname: "",
                password: "",
            },
            ruleform_register : {
                uname:"",
                pass:"",
                password:"",
            },
            loading_register:false,
            loading: false, // 是否显示加载动画
        };
    },
    methods: {
        signIn() {
            this.isRightPanelActive = false;
        },
        signUp() {
            this.isRightPanelActive = true;
        },
        submitForm() {
            // 验证表单中的账号密码是否有效
            if (this.validateForm()) {
                this.loading = true;
                let _this = this;
                // 使用 axios 将登录信息发送到后端
                this.axios({
                    url: "/api/user/login",               // 请求地址
                    method: "post",                       // 请求方法
                    headers: {                            // 请求头
                        "Content-Type": "application/json",
                    },
                    params: {                             // 请求参数
                        uname: _this.ruleForm.uname,
                        password: _this.ruleForm.password,
                    },
                }).then((res) => { // 当收到后端的响应时执行该括号内的代码，res 为响应信息，也就是后端返回的信息
                    if (res.data.code === "0") {  // 当响应的编码为 0 时，说明登录成功
                        // 将用户信息存储到sessionStorage中
                        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
                        // 跳转页面到首页
                        this.$router.push('/admin/overview');
                        // 显示后端响应的成功信息
                        this.$message({
                            message: res.data.msg,
                            type: "success",
                        });
                    } else {  // 当响应的编码不为 0 时，说明登录失败
                        // 显示后端响应的失败信息
                        this.$message({
                            message: res.data.msg,
                            type: "warning",
                        });
                    }
                    // 不管响应成功还是失败，收到后端响应的消息后就不再让登录按钮显示加载动画了
                    _this.loading = false;
                    console.log(res);
                });
            } else {
                console.log("表单验证失败");
            }
        },
        resetForm() {
            this.ruleform_register.uname = "";
            this.ruleform_register.password = "";
            this.ruleform_register.pass = "";
        },
        resetForm_login() {
            this.ruleForm.uname = "";
            this.ruleForm.password = "";
        },
        validateForm() {
            return !!this.ruleForm.uname && !!this.ruleForm.password;
        },
        submitForm_register(event){
            event.preventDefault(); // 阻止表单提交的默认行为

            if (this.ruleform_register.uname && this.ruleform_register.pass && this.ruleform_register.password) {
                this.loading_register = true;
                let _this = this;
                this.axios({     // axios 向后端发起请求
                    url: "/api/user/register",  // 请求地址
                    method: "post",             // 请求方法
                    headers: {                  // 请求头
                        "Content-Type": "application/json",
                    },
                    data: { // 请求参数，为 data，与登录的 params 不太一样
                        uname: _this.ruleform_register.uname,
                        password: _this.ruleform_register.password,
                    },
                }).then((res) => { // 当收到后端的响应时执行该括号内的代码，res 为响应信息，也就是后端返回的信息
                    if (res.data.code === '0') {  // 当响应的编码为 0 时，说明注册成功
                        // 显示后端响应的成功信息
                        this.$message({
                            message: res.data.msg,
                            type: "success",
                        });
                    }else{  // 当响应的编码不为 0 时，说明注册失败
                        // 显示后端响应的失败信息
                        this.$message({
                            message: res.data.msg,
                            type: "warning",
                        });
                    }
                    // 不管响应成功还是失败，收到后端响应的消息后就不再让登录按钮显示加载动画了
                    _this.loading_register = false;
                    console.log(res);
                });
            } else {
                console.log("error submit!!");
                this.loading_register = false;
                return false;
            }
        },

    }
};
</script>

<style>
/*浮动字体*/
.ml1 {
    font-weight: 900;
    font-size: 3.5em;
    position: relative;
}

.ml1 .letter {
    display: inline-block;
    line-height: 1em;
}

.ml1 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -85%);
}

.ml1 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #fff;
    transform-origin: 0 0;
}

.ml1 .line1 { top: 0; }
.ml1 .line2 { bottom: 0; }
/* 样式代码 */
:root {
    /* COLORS */
    --white: #e9e9e9;
    --gray: #333;
    --blue: #0367a6;
    --lightblue: #008997;

    /* RADII */
    --button-radius: 0.7rem;

    /* SIZES */
    --max-width: 758px;
    --max-height: 420px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.body{
//align-items: center;
    background-color: var(--white);
    background: url("../images/3.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    height: 100vh;
//place-items: center;
}
.form__title {
    font-weight: 300;
    margin: 0;
    margin-bottom: 1.25rem;
}

.link {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 1.5rem 0;
    text-decoration: none;
}

.container {
    background-color: var(--white);
    border-radius: var(--button-radius);
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    height: 500px;
    max-width: 800px;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

.container__form {
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.6s ease-in-out;
}

.container--signin {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .container--signin {
    transform: translateX(100%);
}

.container--signup {
    left: 0;
    opacity: 0;
    width: 50%;
    z-index: 1;
}

.container.right-panel-active .container--signup {
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
}

.container__overlay {
    height: 100%;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease-in-out;
    width: 50%;
    z-index: 100;
}

.container.right-panel-active .container__overlay {
    transform: translateX(-100%);
}

.overlay {
    background-color: var(--lightblue);
    background: url("../images/blue_cloud.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: -100%;
    position: relative;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 200%;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay__panel {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 50%;
}

.overlay--left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
    transform: translateX(0);
}

.overlay--right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay--right {
    transform: translateX(20%);
}

.btn {
    background-color: var(--blue);
    background-image: linear-gradient(90deg, var(--blue) 0%, var(--lightblue) 74%);
    border-radius: 20px;
    border: 1px solid var(--blue);
    color: var(--white);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 0.9rem 4rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

.form > .btn {
    margin-top: 1.5rem;
}

.btn:active {
    transform: scale(0.95);
}

.btn:focus {
    outline: none;
}

.form {
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    text-align: center;
}

.input {
    background-color: #fff;
    border: none;
    padding: 0.9rem 0.9rem;
    margin: 0.5rem 0;
    width: 100%;
}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}
.form-item {
    margin-bottom: 20px;
}
</style>
