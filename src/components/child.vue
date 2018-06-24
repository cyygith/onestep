<template>
    <div id="child">
        <h1>I'm a child vue,my name is {{name}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'child'
        }
    }
}
</script>
<style lang="scss" scoped>
h2{
  color:red;
}
</style>
