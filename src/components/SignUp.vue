<template>
<img class="logo" src="../assets/logo.jpg"/>
<h1 class="portada">Registrarse</h1>
<div class="registro">
    <input type="text" v-model="name" placeholder="Introduce Nombre"/>
    <input type="text" v-model="email" placeholder="Introduce Email"/>
    <input type="text" v-model="password" placeholder="Introduce Contraseña"/>
    <button v-on:click="signUp">Registrarse</button>
    <p>
    <router-link style="text-decoration:none; color:inherit;" to="/login">Iniciar Sesion</router-link>
    </p>
</div>

</template>
<script>
import axios from 'axios'
export default{
    name:'SignUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
       async signUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password
            });

            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'HomePage'})
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'HomePage'})
        }
    }
}
</script>


<style>

.logo{
    margin-top:10px;
}
 p{
    margin-left:auto;
    margin-right:auto;
    width:150px;
    height:20px;
    background-color:skyblue;
    font-size:15px;
    color: black;
 } 

 .portada{
     background:#333;
    border-radius:5px;
    margin-left:auto;
    margin-right:auto;
    color:white;
    width:320px;
    height:42px;
 }


</style>
