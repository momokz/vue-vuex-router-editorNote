<template>
	<div class="rawEditor">
		<textarea
			v-model="rawValue"
			v-on:input="rawHandle"
		></textarea>
	</div>
</template>
<script>
export default {
	name: 'rawEditor',
	data() {
		return {
			rawValue: ''
		}
	},
	methods: {
		rawHandle() {
			this.$store.dispatch('rawAction', this.rawValue);
		}
	}
}
</script>
<style scoped>
.rawEditor {
	float: left;
	width: 50%;
	height: 100%;
	padding: 15px;
	box-sizing: border-box;
	border-right: 1px solid #ccc;
}
.rawEditor textarea {
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
}
</style>