<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>
<script type="text/ecmascript-6">
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .m-header
    position: relative
    height 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display :inline-block
      vertical-align:top
      width:30px
      height:32px
      bg-image('logo')
      background-size:30px 32px
      margin-top:5px
      margin-right:9px
    .text
      display:inline-block
      vertical-align top
      line-height :44px
      font-size:$font-size-large
</style>
