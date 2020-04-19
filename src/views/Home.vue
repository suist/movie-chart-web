<template>
  <div class="home">
    <div style="display:flex; flex-direction:column; justify-content:center">
        <list-card v-for="item in 10" :key="item.id" style="margin:12px 100px;"></list-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCard from '@/components/ListCard.vue'

export default {
  name: 'Home',
  components: {

    ListCard
  }
}
</script>
