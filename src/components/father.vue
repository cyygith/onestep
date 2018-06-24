<template>
    <div id="father">
        <h1>I'm a child vue,my name is {{name}}</h1>
        <child></child>
    </div>
</template>
<script>
import child from './child.vue';

export default {
    data(){
        return {
            name:'father'
        }
    }
}
</script>
<style lang="scss" scoped>
h2{
  color:red;
}
</style>
