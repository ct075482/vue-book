<template>
    <div class="bookshelves">
      <div><img src="../assets/img/logo.png" style="width: 30%"/></div>
      <el-input v-model="input" placeholder="用户名" class="username" id="username"></el-input>
      <el-input v-model="input" placeholder="密码" type="password" class="password" id="pwd"></el-input>
      <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 4}"
              placeholder="座右铭"
              v-model="textarea3" class="username" id="motto">
      </el-input>
        <router-link to="/Me" > <el-button type="primary" class="button" @click="register">注册</el-button></router-link>

    </div>
</template>

<script  >
  import BookHeader from '../components/BookHeader'
  export default {
    name: 'bookshelves',
    path: '',
    components: {
      BookHeader
    },

    methods: {
      register: function () {
        // var that = this
        var username = document.getElementById("username").getElementsByTagName("input");
        var pwd = document.getElementById("pwd").getElementsByTagName("input");
        var motto = document.getElementById("motto").getElementsByTagName("textarea");
        // console.log(motto[0].value);
        motto = motto[0].value;
        username = username[0].value;
        pwd = pwd[0].value;
        $.ajax({
          type: "POST",
          url: "http://localhost:8011/gallery/public/index/index/register",
          dataType: "json",
          data: {
            'email': username,
            'password': pwd,
            'major':motto
          },
          success: function (json) {
            if(json.code==0){
            //   that.loginStatus = true;
            //   that.name=json.data.email;
            //   sessionStorage.setItem("code",JSON.stringify(json.code));
            //   sessionStorage.setItem("email",JSON.stringify(json.data.email));

            }
            this.$router.push({ path: '/Me'});
            console.log(json);
          },
          error: function () {
            alert("1");
          }
        });
      },

    },
    data () {
      return {
        list: false,

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bookshelves{
    width: 100%;
    height: 100%;
    padding-top: 30%;
    padding-bottom: 60%;
    background: url("../assets/img/background.jpg") no-repeat;
    background-size: cover;
  }
  .username {
    margin-top: 5%;
    width: 60%;
      /*background: rgba(0, 0, 0, 0.25);*/
  }

  .password {
    margin-top: 6%;
    width: 60%;
  }
  .button {
    width: 60%;
    float: left;
    margin-left: 20%;
    margin-top: 6%;
    margin-bottom: 5%;
  }
</style>
