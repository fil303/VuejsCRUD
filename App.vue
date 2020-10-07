<template>
  <div>
    <div class="centerx">
      
      <vs-navbar
        v-model="indexActive"
        :color="colorx"
        text-color="rgba(255,255,255,.6)"
        active-text-color="rgba(255,255,255,1)"
        class="myNavbar"
      >
        <div slot="title">
          <vs-navbar-title> Simple CRUD </vs-navbar-title>
        </div>

        <vs-navbar-item index="0">
          <a href="#">Home</a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <a href="#">News</a>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <a href="#">Update</a>
        </vs-navbar-item>

        <vs-spacer></vs-spacer>

        <vs-button
          color-text="rgb(255, 255, 255)"
          color="rgba(255, 255, 255, 0.3)"
          type="flat"
          icon="more_horiz"
        ></vs-button>
      </vs-navbar>
    </div>


    <tablea :h="name">

      

    </tablea>


    <vs-row class="footer" vs-justify="center" vs-align="center">
      <div><strong>2020 </strong>Copy Write By :<strong> Israfil</strong></div>
    </vs-row>



  </div>
</template>

<script>
import tablea from './components/tablea'
export default {
  name: "App",
  components:{tablea},
  data: ()=>({
    colorx:'#1db952',
    indexActive: 0,
    name:'Israfil Hossain',
    //Num : this.$store.state.num
  }),
  methods:{
   
  },computed:{
   
  }
  
};
</script>

<style>

  .footer{
    padding: 2%;
    background-color: lightblue;
  }

  .myNavbar{
  color:
  rgb(255,255,255);}
</style>
