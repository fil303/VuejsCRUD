import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
      
    
    num : 5465
  },
  getters:{

     getdata (state) {

        return state.user

      },
      getN(state){
        return state.num
      },


      edit(state,payload){
        var map = state.user.map(item => { return item.phone; }).indexOf(payload)
        console.log(map)
      }

  },
  mutations: {
    addn (state, payload){
      state.user = payload
    },
    addno (state, payload){
      state.user.push(payload)  
    },
    delete(state,payload){
      var removeIndex = state.user.map(item => { return item.id; }).indexOf(payload);
      state.user.splice(removeIndex,1)
    }
  },
  actions: {
    async acc(state){
      const getuser = await axios.get('http://localhost:3000/to');
      state.commit('addn', getuser.data)

    },


    async  x (state,payload){
     await axios.post('http://localhost:3000/to',{
          "name":payload.name,
          "email":payload.email,
          "website":payload.website,
          "phone": payload.phone
      })

     await state.commit('addno',payload)
     },

     d(state,payload){
        axios.delete('http://localhost:3000/to/'+payload );

        
        state.commit('delete',payload)
     },

     editaction(state,payload){
       state.commit('edit',payload)
        

      // axios.put('http://localhost:3000/to/'+payload,
      // {
      // NewBidMade:this.NewBidMade
      // })
      //   .then((response) => {

      //     console.log(response.data);    
  
      //   })
      //   .catch(function(error){
      //     console.log(error);
      //   });
     }

  },
  modules: {
  }
})
