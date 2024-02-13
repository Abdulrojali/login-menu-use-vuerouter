<script>
import {useRouter} from 'vue-router'
export default{
  data(){
    return{
      username:'',
      password:'',
      numberPhone:'',
      emailUser:'',
      router:useRouter(),
    }
  },
  methods:{
    back(){
      this.router.push('/')
    },
    createAccount(){
      if(this.username==='' || this.password==='' || this.numberPhone==='' || emailUser===''){
        alert('tolong masukkan input')
      }
      else{
        alert('berhasil membuat account')
        this.router.push('/')
      }
    }
  }
}
</script>
<template>
  <div class="container">
    <h1>create Account</h1>
    <table>
      <tr>
        <td>username</td>
        <td><input type="text" placeholder="username" v-model="username"> </td>
        <td>password</td>
        <td><input type="password" placeholder="password" v-model="password"></td>
        <td>number Phone</td>
        <td><input type="text" placeholder="numberPhone" v-model="numberPhone"></td>
        <td>email</td>
        <td><input type="text" placeholder="email" v-model="emailUser"></td>
        <div class="btn">
          <button @click="createAccount">create Account</button>
          <button @click="back">back</button>
        </div>
      </tr>
    </table>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: greenyellow;
}
h1{
  font-size: 2em;
  font-weight: 600;
  text-transform: capitalize;
}
table{
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
tr{
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
td{
  font-size: 1.2em;
  font-weight: 300;
}
input{
  display: block;
  padding: 6px 10px;
  width: 100%;
}
.btn{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
}
button{
  padding: 6px 8px;
  border: none;
  color: white;
  background-color: blue;
  cursor: pointer;
  border-radius: 5px;
  text-transform: capitalize;
}
button:hover{
  opacity: .8;
}
</style>