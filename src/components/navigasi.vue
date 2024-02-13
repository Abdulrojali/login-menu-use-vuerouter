<script>
import {useRouter} from 'vue-router'
export default{
    data(){
        return{
            list:[
                {path:'/home',name:'home'},
                {path:'/menu',name:'menu'},
                {path:'/service',name:'service'},
            ],
            router:useRouter()
        }
    }, 
    methods:{
        pushRouting(path){
                this.router.push(path)
            },
            logout(){
                this.router.push('/')
            }
    }
}
</script>

<template>
    <nav>
        <ul>
            <li  v-for="(data,index) in list" :key="index" @click="pushRouting(data.path)">{{ data.name }}</li>
        </ul>
        <button @click="logout">logout</button>
    </nav>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
nav{
    padding: 15px 5px;
    border-bottom:1px solid gray;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
ul{
    display: flex;
    gap:30px;
    list-style-type: none;
}
li{
    font-size: 2em;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
}
li:hover{
    opacity: .8;
}
button{
    background-color: blue;
    color: white;
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover{
    opacity: .7;
}
</style>