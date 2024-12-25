<template>
	<Page>
		<router-link to="/">
			Назад
		</router-link>

		<div class="signs">
			<Card
				v-for="(item, index) in signs"
				:key="item.title"
				:image="getSignImage(index)"
				:title="item.title"
				to="/"
				@click="sign.set(index)"
			/>
		</div>
	</Page>
</template>

<script setup>
import { useSign } from '@/stores/sign.js'

import Page from '@/components/page.vue'
import Card from '@/components/card.vue'

import signs from '@/assets/signs.js'

const sign = useSign()

const getSignImage = index => {
	return new URL(`/src/assets/images/${index}.png`, import.meta.url).toString()
}
</script>

<style scoped>
.signs {
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;
}
</style>
