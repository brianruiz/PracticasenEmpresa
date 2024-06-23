<template>
<HeaderPage />
<h1> Actualizar Restaurante </H1>

<form class="add">
<input type="text" name="name" placeholder="Introduce Nombre" v-model="restaurant.name" />
<input type="text" name="address" placeholder="Introduce Direccion" v-model="restaurant.address" />
<input type="text" name="contact" placeholder="Introduce Contacto" v-model="restaurant.contact"/>
<input type="text" name="desc" placeholder="Introduce descripcion" v-model="restaurant.desc"/>

<button type="button" v-on:click="updateRestaurant">Actualizar Restaurante</button>

</form>
</template>

<script>
import HeaderPage from './Header.vue'
import axios from 'axios'
export default{
    name: 'UpdatePage',
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
        async updateRestaurant()
        {
             const result= await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
                desc:this.restaurant.desc,
            });
            if(result.status==200)
            {
                this.$router.push({name:'HomePage'});

            }
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }

        const result= await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)

        console.warn(result.data)
        this.restaurant=result.data
    }
}

</script>