<template>
    <div class="renderEditor">
    	{{renderValue}}
    </div>
</template>
<script>
export default {
    name: 'renderEditor',
    data() {
    	return {}
    },
    computed: {
    	renderValue(){
    		return this.$store.getters.getRawValue;
    	}
    }
}
</script>
<style scoped>
.renderEditor {
	float: left;
	width: 50%;
	height: 100%;
	padding: 15px;
	box-sizing: border-box;
	font-size: 14px;
	background: #000;
	color: #fff;
	line-height: 24px;
}
</style>
