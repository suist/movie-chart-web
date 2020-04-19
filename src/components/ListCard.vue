<template>
<div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="imageUrl + card.poster_path" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
           {{card.title}}
          </b-card-text>
          <b-card-text>
          Date: {{card.release_date}}
          </b-card-text>
          <b-card-text>
           Rate: {{card.vote_average}} ({{card.vote_count}})
          </b-card-text>
          <b-button :href="movieData.link" variant="primary">Go Detail</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      movieData:
        {"image":'https://picsum.photos/400/400/?image=20',title:'Movie title',date:'2012-02-02',rate:'4.5',link:'https://naver.com'}
      ,
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      
    


    }
  },
  props:{
    card:{
      type:Object
    }

  },
  methods: {

  }

}
</script>

<style>

</style>