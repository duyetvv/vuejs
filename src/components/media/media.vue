<template>
  <div class="media-play">
    <div class="media-play__info">
      <div class="media-play__title">{{song.name}}</div>
      <div class="media-play__singer">{{song.artists_names}}</div>
      <img :src="song.thumbnail" :alt="song.title">
    </div>
    <audio controls :src="src"></audio>
    <!-- <div class="mp3__player-info"></div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      song: 'getSong',
      src: 'songSource'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
