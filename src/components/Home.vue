<template>
<HeaderPage />
<h1> Hola {{name}}, bienvenido a tus notas.</H1>

<table>
<thead>
<tr class="header">
<th>Id</th>
<th>Nombre</th>
<th>Contacto</th>
<th>Direccion</th>
<th>Acciones</th>
</tr>
</thead>
<tr v-for="item in restaurant" :key="item.id">


<td>{{item.id}}</td>
<td>
<router-link :to="'/restaurant/'+item.id">{{item.name}}</router-link>

</td>
<td>{{item.contact}}</td>
<td>{{item.address}}</td>

<td>
<router-link :to="'/update/'+item.id">Actualizar</router-link>
<button class="boton" v-on:click="deleteRestaurant(item.id)">Eliminar</button>
</td>


</tr>
</table>


</template>
<script>
import HeaderPage from './Header.vue'
import axios from 'axios';

export default{
    name: 'HomePage',
    data(){
        return{
            name:'',
            restaurant:[],
        }
    },
    components:{
        HeaderPage,
    },
    methods:{
       async deleteRestaurant(id)
        {
            let result =await axios.delete("http://localhost:3000/restaurant/"+id);
            console.warn(result)
            if(result.status==200)
            {
                this.loadData()
            }
    },
    async loadData()
        {
            let user = localStorage.getItem('user-info');
            this.name=JSON.parse(user).name;
            if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        let result =await axios.get("http://localhost:3000/restaurant");
        this.restaurant=result.data;
        }
    },
     async mounted()
    {
      this.loadData();
    }
}

</script>

<style>

td{
    width: 160px;
    height:40px;
}

table{ 
    background-color:white;
    margin-right:auto;
    margin-left:auto;
    border-collapse:collapse;
    margin-bottom:30px;
}

thead{
    background-color:#246355;
    border-bottom:solid 5px #0f362d;
    color:white;
}

th, td{
    padding:20px;
}

tr:nth-child(even){
    background-color:#E7E3E1;
}

tr:hover td{
    background-color:#369381;
    color:white;
}

.nav{
    background-color: #333;
    overflow: hidden
}

h1{ 
    color:#fff;
    font-size:45px;
    text-align:center;
    padding-bottom:15px;
    text-shadow: 0 15px 10px rgba(0,0,0,0.2);
 }

 .boton{
    color:#fff;
    border:none;
    outline:none;
    margin-top:10px;
    padding:4px 7px;
    background:#333;
    border-radius:5px;
    display:inline-block;
    text-decoration:none;
 }



</style>
