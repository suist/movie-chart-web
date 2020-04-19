<template>
  <div class="home">
    <div style="display:flex; flex-direction:column; justify-content:center">
      
        <list-card :card="item" v-for="item in movieList" :key="item.id" style="margin:12px 100px;"></list-card>
        <infinite-loading @infinite="infiniteHandler" force-user-infinite-warpper=".el-table__body-wrapper" slot="append"></infinite-loading>
    </div>
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
        apiKey: 'b1732a7e79da2bd0d0023abb9d6df1f8',
        loaded: true,
        page:1,
    }},
    created() {
        // this.getData();
    },
    methods: {

        // getData() {
        //     this.$axios.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=popularity.desc').then(res => {
        //         this.movieList = res.data.results;
        //         this.loaded = false;
        //     });
        // },
        infiniteHandler($state) {
          this.$axios.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=popularity.desc',{
          params: {
            page :this.page,
          },
        })
            .then(res => {
              setTimeout(() => { //스크롤 페이징을 띄우기 위한 시간 지연(1초)
                if (res.data.results.length) {
                  this.page+=1;
                  this.movieList= this.movieList.concat(res.data.results)
                  $state.loaded(); //데이터 로딩
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
