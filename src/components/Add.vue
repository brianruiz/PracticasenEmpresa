<template>
<HeaderPage />
<h1> Añadir Restaurante </H1>
<form class="add">
<input type="text" name="name" placeholder="Introduce Nombre" v-model="restaurant.name" />
<input type="text" name="address" placeholder="Introduce Direccion" v-model="restaurant.address" />
<input type="text" name="contact" placeholder="Introduce Contacto" v-model="restaurant.contact"/>
<input type="text" name="desc" placeholder="Introduce la descripcion" v-model="restaurant.desc"/>

<button type="button" v-on:click="addRestaurant">Añadir Restaurante</button>

</form>
</template>

<script>
import HeaderPage from './Header.vue'
import axios from 'axios'
export default{
    name: 'AddPage',
    components:{
        HeaderPage
    },
    data()
    {
        return{
            restaurant: {
                name:'',
                address:'',
                contact:'',
                desc:''
            }
        }
    },
    methods:{
      async addRestaurant()
        {
            console.warn(this.restaurant)
            const result= await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
                desc:this.restaurant.desc,

            });
            if(result.status==201)
            {
                this.$router.push({name:'HomePage'});

            }
            console.warn("result",result)
        }
    },
     mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}


</script>