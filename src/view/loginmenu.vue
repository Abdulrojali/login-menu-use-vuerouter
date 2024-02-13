<script>
import {useRouter} from 'vue-router'
export default{
    data(){
        return{
            username:'',
            password:'',
            router:useRouter()
        }
    },
    methods:{
        login(){
            if(this.username===''|| this.password===''){
                alert('tolong masukkan input')
            }
            else if(this.username==='admin' && this.password==='12345'){
                this.router.push('/dashboardmenu')
            }
            else{
                alert('account belum terdaftar')
            }
        },
        cancel(){

        },
        createAccount(e){
            e.preventDefault()
            this.router.push('/createAccount')
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="loginmenu">
            <h3>login menu</h3>
            <input type="text" placeholder="username" v-model="username">
            <input type="password" placeholder="password" v-model="password">
            <div class="btn">
                <button @click="login">login</button>
                <button @click="cancel">cancel</button>
            </div>
            <b>create account? <a href="" @click="createAccount">create Account</a></b>
        </div>
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
    justify-content: center;
    align-items: center;
    background-color: greenyellow;
}
.loginmenu{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.loginmenu input{
    width: 40%;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    border: 1px solid gray;
}
.btn{
    margin-top: 15px;
    margin-bottom: 10px;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items:center;    
}
button{
    padding: 6px 8px;
    background-color: blue;
    color: white;
    text-transform: capitalize;
    border: none;
    border-radius: 5px;
}
h3{
    font-size: 2em;
    font-weight: 600;
    text-transform: capitalize;
}
a{
    text-decoration: none;
    cursor: pointer;
}
</style>