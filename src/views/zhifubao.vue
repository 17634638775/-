<template>
  <div>
      <div v-html="$store.state.zfb.data">

      </div>
  </div>
</template>

<script>
export default {
data(){
    return{}
},
created(){
    console.log(this.$store.state.zfb.data)
    

}
}
</script>

<style>

</style>