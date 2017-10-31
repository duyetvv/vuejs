<template>
  <li class="mp3__album-item">
    <button class="mp3__album-item__play" @click="setSong(song)">Play</button>
    <div class="mp3__album-item__info">
      <span class="mp3__album-item__info-name">{{song.name}}</span>
      <span class="mp3__album-item__info-singer">{{song.artists_names}}</span>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    song: {
      type: Object,
      default: {}
    }
  },

  methods: {
    ...mapActions(['setSong'])
  }
}
</script>

<style lang="scss" scoped>
  .mp3 {
    &__album-item {
      display: block;

      &__play {
        display: inline-block;
      }

      &__info {
        display: inline-block;
      }
    }
  }
</style>
