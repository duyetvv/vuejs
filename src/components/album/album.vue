<template>
  <div class="mp3__album">
    <div class="mp3__album-play">
      <media></media>
    </div>
    <ul class="mp3__album-list">
      <song v-for="(song, key) in songs" :song="song" :key="key"></song>
    </ul>
  </div>
</template>

<script>
import song from './song'
import media from '../media/media'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    song,
    media
  },

  props: {
    albumID: {
      type: String,
      default: ''
    }
  },

  computed: {
    ...mapGetters({
      songs: 'getAlbum'
    }),

    isRender: () => {
      return Object.keys(this.songs).length
    }
  },

  methods: {
    ...mapActions(['setAlbum', 'setAlbumID'])
  },

  mounted () {
    this.setAlbum(this.albumID)
  }
}
</script>

