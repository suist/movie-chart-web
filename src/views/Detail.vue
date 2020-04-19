<template>
  <div>
    <b-container style="padding:120px;background-color: #f7f7f7;">
      <div style="position:absolute;top:0">
        <b-icon icon="House-fill" variant="black" size="lg" style="padding:20px;cursor:pointer" @click="$router.push('/')"></b-icon>
        </div>
      
      <b-row>
        <b-col>
          <b-img thumbnail :src="imageUrl + movie.poster_path"></b-img>
        </b-col>
        <b-col>
          <b-row style="font-size:32px;font-weight:600; padding:12px">{{movie.title}}</b-row>
          <b-row align-h="end">{{movie.release_date}}</b-row>
          <b-row><b-badge style="margin:4px;padding:4px" v-for="genre in movie.genres" :key="genre.id">{{genre.name}}</b-badge></b-row>
          <b-row align-h="start" style="margin-top:60px;font-size:22px">{{movie.overview}}</b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-container style="padding:80px 0 ">
      <div style="font-size:32px;font-weight:600;text-align:left;margin:12px">Similar</div>
      <div style="display:flex;overflow: scroll;flex-wrap: nowrap;" >
      <b-card
        v-for="item in similar" :key="item.id" style="min-width: 20rem;" @click="$router.push({ name: 'Detail', params: { id: item.id }})"
  >
  <b-card-img :src="imageUrl+item.poster_path" ></b-card-img>
    <b-card-text style="font-weight:500;">
      {{item.title}}
    </b-card-text>
  </b-card>
  </div>
  <div v-if="!similar.length>0" style="margin:120px;font-size:20px">Sorry, there is no similar movie</div>
    </b-container>

    <b-container>
      <div style="font-size:32px;font-weight:600;text-align:left;">Review</div>
    <b-card v-for="review in reviews" :key="review.id" border-variant="white"
    >
      <b-card-header style="text-align:left;font-weight:500;"><b-avatar style="margin:8px" size="sm"></b-avatar>{{review.author}}</b-card-header>
      <b-card-text style="text-align:left;overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3;-webkit-box-orient: vertical; word-wrap:break-word; line-height: 1.2em; height: 3.6em;margin:16px">
        {{review.content}}</b-card-text>
      <b-row align-h="end" style="padding-right:40px"><b-button :href="review.url" variant="outline-dark">More read</b-button></b-row>
      <div style="border-top:1px solid #DEDEDE;margin-top:16px"></div>
    </b-card>
    <div v-if="!reviews.length>0" style="margin:120px;font-size:20px">Sorry, there is no review</div>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      movie:'',
      reviews:'',
      similar:'',
      loaded: true,
      baseUrl: 'https://api.themoviedb.org/3',
      imageUrl: 'https://image.tmdb.org/t/p/w400',
     

    }
  },
  created(){
    this.getData()
            

  
  },
  methods:{
    getData(){
      this.$axios.all([this.$axios.get(this.baseUrl + '/movie/'+this.$attrs.id+'?api_key='+ process.env.VUE_APP_TOKEN ),
      this.$axios.get(this.baseUrl + '/movie/'+this.$attrs.id+'/reviews'+'?api_key='+ process.env.VUE_APP_TOKEN ),
      this.$axios.get(this.baseUrl + '/movie/'+this.$attrs.id+'/similar'+'?api_key='+ process.env.VUE_APP_TOKEN )])
    .then(resArr => {
      this.movie = resArr[0].data;
      this.reviews = resArr[1].data.results;
      this.similar = resArr[2].data.results;
    }).catch(error => {
              console.error(error);
            })

    }
  },
   watch: {
    '$route.params.id': function () {
      this.getData()
    }
   }

}
</script>

<style>

</style>
