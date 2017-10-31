<template>
  <main class="main">
    <album :albumID="albumID"></album>
  </main>
</template>

<script>
  import album from './components/album/album'

  export default {
    components: {
      album
    },

    data () {
      return {
        albumID: 'knxmyLHsBaSgaEdyHtFmLnykQniSSZpxH'
      }
    }
  }
</script>

<style>

</style>

