<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
#app {
    width: 900px;
    height: 100vh;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
}
.clearfix::after {
    font-size: 0;
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    content: '.';
}
</style>
