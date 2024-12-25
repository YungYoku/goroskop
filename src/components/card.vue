<template>
	<component
		:is="to ? 'router-link' : 'div'"
		:to
		class="card"
	>
		<img
			v-if="image"
			:src="image"
			alt=""
			class="card__image"
		>

		<div class="card__info">
			<div
				v-if="title"
				class="card__title"
			>
				{{ title }}
			</div>
			<div
				v-if="description"
				class="card__description"
			>
				{{ description }}
			</div>
		</div>
	</component>
</template>

<script setup>
defineProps({
	image: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: ''
	},
	description: {
		type: String,
		default: ''
	},
	to: {
		type: String,
		default: null
	}
})
</script>

<style scoped>
.card {
	width: 100%;

	display: flex;
	align-items: flex-start;
	gap: 15px;

	padding: 10px;

	background: var(--color-background-soft);
	border-radius: 10px;
}

.card__image {
	width: 64px;
	height: 64px;
}

.card__info {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
</style>
