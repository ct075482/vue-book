<template>
    <div class="me">
        <div class="login" id="login" v-if="!loginStatus">
            <div><img src="../assets/img/logo.png" style="width: 30%"/></div>
            <el-input v-model="input" placeholder="用户名" class="username" id="username"></el-input>
            <el-input v-model="input" placeholder="密码" type="password" class="password" id="pwd"></el-input>
            <el-button type="primary" class="button" @click="login">登陆</el-button>
            <router-link to="/Bookshelves" > <div class="register">注册新用户</div></router-link>
        </div>
        <div v-if="loginStatus" class="card" id="card">
            <ul>
                <li>
                    <img src="../assets/img/book01.jpg"/>
                </li>
                <li>
                    <h3 id="name">{{ name }}</h3>
                    <p>{{ motto }}</p>
                </li>
            </ul>
        </div>
        <div v-if="loginStatus" class="newCard" id="newCard">
            <ul>
                <li>
                    我的书单
                    <i class="el-icon-arrow-right"></i>
                </li>
                <li>
                    我的等级
                    <i class="el-icon-arrow-right"></i>
                </li>
                <li>
                    我的粉丝
                    <i class="el-icon-arrow-right"></i>
                </li>
            </ul>
        </div>

        <div v-if="loginStatus" class="lastCard" id="lastCard">
            <ul id="cancel" @click="cancel">
                <li >注销</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Me',
    data () {
      return {
        loginStatus: false,
        name:"",
        motto:''
      }
    },
    mounted: function () {
     // console.log(JSON.parse(sessionStorage.getItem("code")));
      if(JSON.parse(sessionStorage.getItem("code"))==0){
        // console.log(1);
        // var that = this
        this.loginStatus = true;
        this.name=JSON.parse(sessionStorage.getItem("email"));
        this.motto=JSON.parse(sessionStorage.getItem("motto"));
      }
  },
    methods: {
      login: function () {
        var that = this
        var username = document.getElementById("username").getElementsByTagName("input");
        var pwd = document.getElementById("pwd").getElementsByTagName("input");
        username = username[0].value;
        pwd = pwd[0].value;
        $.ajax({
          type: "POST",
          url: "http://localhost:8011/gallery/public/index/index/login",
          dataType: "json",
          data: {
            'email': username,
            'password': pwd
          },
          success: function (json) {
            if(json.code==0){
              that.loginStatus = true;
              that.name=json.data.email;
              that.motto=json.data.major;
              sessionStorage.setItem("code",JSON.stringify(json.code));
              sessionStorage.setItem("email",JSON.stringify(json.data.email));
              sessionStorage.setItem("motto",JSON.stringify(json.data.major));
            }

          },
          error: function () {
            alert("1");
          }
        });
      },
      cancel: function () {
        sessionStorage.setItem("code", JSON.stringify(1));
        this.loginStatus = false;
        // console.log(1);
        // this.$router.replace("../Me");
       // this.$router.push({ path: '/Me'});
        // alert(1);
        // document.getElementById("cancel").addEventListener("click", function() {
        //   alert(1);
        // });
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .register {
        margin-left: 50%;

        width: 30%;
        text-align: right;
    }

    .button {
        width: 60%;
        float: left;
        margin-left: 20%;
        margin-top: 6%;
        margin-bottom: 5%;
    }

    .username {
        margin-top: 5%;
        width: 60%;
    }

    .password {
        margin-top: 6%;
        width: 60%;
    }

    .login {
        width: 100%;
        height: 100%;
        padding-top: 30%;
        padding-bottom: 60%;
        background: url("../assets/img/background.jpg") no-repeat;
        background-size: cover;
    }

    .card, .newCard, .lastCard {
        width: 100%;
        height: 100%;
        background: white;
        margin: 10px 0;
        text-align: left;
    }

    ul li {
        display: inline-block;
        vertical-align: middle;
    }

    .card ul li:first-child {
        width: 70px;
        height: 70px;
        overflow: hidden;
        border-radius: 50%;
        margin: 5px;
    }

    .card ul li:first-child img {
        width: 100%;
        height: 100%;
    }

    p {
        font-size: 0.7rem;
    }

    .newCard li {
        height: 2.5rem;
        line-height: 2.5rem;
        text-indent: 1rem;
        width: 100%;
        border-bottom: 1px solid rgba(10, 10, 10, 0.1);
        position: relative;
    }

    .newCard li i {
        position: absolute;
        top: 0.6rem;
        right: .5rem;
        color: rgba(0, 0, 0, 0.2);
    }

    .lastCard {
        text-align: center;
        color: #219cea;
        height: 2.2rem;
        line-height: 2.2rem;
        font-size: 1.1rem;
    }
</style>
