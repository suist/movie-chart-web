<template>
<div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="4">
        <b-badge variant="light" style="z-index: 1;
   position: absolute; margin:8px">{{idx+1}}</b-badge>
        <b-card-img :src="imageUrl + card.poster_path" alt="Image" class="rounded-0"></b-card-img>
        
      </b-col>
      <b-col md="8">
        <b-card-body>
          <b-card-text style="font-size:24px;font-weight:600;height:84px">
           {{card.title}}
          </b-card-text>
          <b-card-text style="font-size:16px;font-weight:500;">
          Release Date: {{card.release_date}}
          </b-card-text>
          <b-card-text style="font-size:16px;font-weight:500;">
           Rate: <b-icon icon="star-fill" variant="warning"></b-icon>{{card.vote_average}} ({{card.vote_count}})
          </b-card-text>
          <b-button @click="movieDetail" variant="primary" style="font-size:16px;font-weight:500;">Go Detail</b-button>
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

      imageUrl: 'https://image.tmdb.org/t/p/w300',

    


    }
  },
  props:{
    card:{
      type:Object
    },
    idx:{
      type:Number
    }

  },
  methods: {
    movieDetail() {
      this.$router.push({ name: 'Detail', params: { id: this.card.id }})
    }


  }

}
</script>

<style>

</style>