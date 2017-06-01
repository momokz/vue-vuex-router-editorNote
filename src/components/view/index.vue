<template>
    <div class="wrap clearfix">
		<rawEditor></rawEditor>
		<renderEditor></renderEditor>
    </div>
</template>
<script>
import rawEditor from '../rawEditor';
import renderEditor from '../renderEditor';
export default {
    name: 'index',
    components: {
    	rawEditor,
    	renderEditor
    },
    data() {
        return {}
    }
}
</script>
<style scoped>
.wrap {
	width: 100%;
	height: 100%;
}
</style>
