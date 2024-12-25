<template>
	<img
		:src
		alt=""
		class="sign-image"
	>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	id: {
		type: Number,
		default: 0
	}
})

const src = computed(() => {
	return new URL(`/src/assets/images/${props.id}.png`, import.meta.url).toString()
})
</script>

<style scoped>
.sign-image {
	width: 100%;
	height: 100%;
}
</style>
