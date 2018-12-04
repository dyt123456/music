<template>
  <div class="singer"></div>
</template>

<script type="text/ecmascript-6">
import { getSingerList } from 'api/singer'
import { ERR_0K } from 'api/config'

export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      console.log(2)
      getSingerList().then((res) => {
        if (res.code === ERR_0K) {
          this.singers = res.data.list
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus"></style>
