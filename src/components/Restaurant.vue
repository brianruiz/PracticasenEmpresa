<template>
<HeaderPage />

<div class=wrapper>
<h2 class="btn">{{restaurant.name}} </h2>
<div class=container>
<div class=box>
<h3>Direccion: {{restaurant.address}} </h3>
<h3>Contacto: {{restaurant.contact}} </h3>
<h3>Descripcion</h3>
<div> {{restaurant.desc}} </div>

</div>
</div> 
</div>

</template>

<script>
import HeaderPage from './Header.vue'
import axios from 'axios'
export default{
    name: 'RestaurantPage',
    data(){
        return{
            restaurant: {
                name:'',
                address:'',
                contact:'',
                desc:''
            }
        }
    },
    components:{
        HeaderPage
    },
        methods:{
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

<style>
 
 h2{
    width:310px;
    height:42px;
    margin-top:80px;
    margin-left:auto;
    margin-right:auto;
    color:white;
    font-size:45px;
    text-align:center;
    padding-bottom:15px;
    text-shadow: 0 15px 10px rgba(0,0,0,0.2);
 }

 .container{
    display: grid;
    gap: 15px;
    grid-template-columns: repeat (auto-fit,minmax(270px,1fr));
 }
.box{
    margin-left:auto;
    margin-right:auto;
    height:auto;
    width:600px;
    padding:20px;
    text-align:center;
    border-radius:5px;
    background:#fff;
    box-shadow:0px 5px 10px rgba(0,0,0,0.2);
}

.btn{
    color:#fff;
    border:none;
    outline:none;
    font-size:33px;
    margin-top:10px;
    padding:8px 15px;
    background:#333;
    border-radius:5px;
    display:inline-block;
    text-decoration:none;
}

h3{
    color:#444;
    padding: 10px 0;
    font-size:20px;
}

</style>