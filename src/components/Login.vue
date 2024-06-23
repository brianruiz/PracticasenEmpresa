<template>

<img class="logo" src="../assets/logo.jpg"/>
<h1 class="portada" >Iniciar Sesion</h1>
<div class="login">
    <input type="text" v-model="email" placeholder="Introduce Email"/>
    <input type="text" v-model="password" placeholder="Introduce Contraseña"/>
    <button v-on:click="login" >Iniciar Sesion</button>
    <p>
    <router-link style="text-decoration:none; color:inherit;" to="/sign-up">Registrarse</router-link>
    </p>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name:'LoginPage',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

             if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'HomePage'})
            }
            console.warn(result)
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