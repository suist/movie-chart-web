<template>
  <div>
    <b-container >
      <b-row>
        <b-col>
          <b-img thumbnail :src="imageUrl + movie.poster_path"></b-img>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      movie:'',
      loaded: true,
      baseUrl: 'https://api.themoviedb.org/3',
      imageUrl: 'https://image.tmdb.org/t/p/w500',
     

    }
  },
  created(){
    this.$axios.get(this.baseUrl + '/movie/'+this.$attrs.id+'?api_key='+ process.env.VUE_APP_TOKEN )
    .then(res => {
      this.movie = res.data

    }).catch(error => {
              console.error(error);
            })
            


  }

}
</script>

<style>

</style>
