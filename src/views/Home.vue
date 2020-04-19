<template>
  <div class="home">
    <div style="margin:120px"></div>
    <b-container>
      
        <list-card :card="item" :idx="idx" v-for="(item,idx) in movieList" :key="item.id" >
          
        </list-card>
        <infinite-loading @infinite="infiniteHandler" force-user-infinite-warpper=".el-table__body-wrapper" slot="append"></infinite-loading>
    </b-container>
   
  </div>
</template>

<script>

import ListCard from '@/components/ListCard.vue'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Home',
  components: {

    ListCard,
     InfiniteLoading
  },
  data() {
    return{
        movieList: [],
        baseUrl: 'https://api.themoviedb.org/3',
        loaded: true,
        page:1,
    }},
    created() {
 
 
    },
    methods: {
        infiniteHandler($state) {
          this.$axios.get(this.baseUrl + '/movie/now_playing?api_key=' + process.env.VUE_APP_TOKEN  ,{
          params: {
            page :this.page,
          },
        })
            .then(res => {
              setTimeout(() => { 
                if (res.data.results.length) {
                  this.page+=1;
                  this.movieList= this.movieList.concat(res.data.results)
                  $state.loaded(); 
                } else {
                  $state.complete();
                }
              }, 1000)
            }).catch(error => {
              console.error(error);
            })
            }
    }
}
</script>
