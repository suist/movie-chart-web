<template>
  <div class="home">
    <div style="display:flex; flex-direction:column; justify-content:center">
        <list-card :card="item" v-for="item in movieList" :key="item.id" style="margin:12px 100px;"></list-card>
    </div>
  </div>
</template>

<script>

import ListCard from '@/components/ListCard.vue'


export default {
  name: 'Home',
  components: {

    ListCard
  },
  data() {
    return{
        movieList: [],
        baseUrl: 'https://api.themoviedb.org/3',
        apiKey: 'b1732a7e79da2bd0d0023abb9d6df1f8',
        loaded: true
    }},
    created() {
        this.getData();
    },
    methods: {

        getData() {
            this.$axios.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=popularity.desc').then(res => {
                this.movieList = res.data.results;
                this.loaded = false;
            });
        }
    }
}
</script>
