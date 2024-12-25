<template>
	<Page>
		<router-link
			class="chosen-sign"
			to="/sign"
		>
			<Sign :id="sign.value"/>
		</router-link>

		<div class="categories">
			<Card
				v-for="i in 6"
				:key="i"
				:description="`Описание ${i}`"
				:title="`Категория ${i}`"
				:to="`/category/${i}`"
			/>
		</div>
	</Page>
</template>

<script setup>
import { useSign } from '@/stores/sign.js'

import Page from '@/components/page.vue'
import Card from '@/components/card.vue'
import Sign from '@/components/sign.vue'

const sign = useSign()
</script>

<style scoped>
.chosen-sign {
	width: 128px;
	height: 128px;

	display: block;

	margin: 0 auto;
}

.categories {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
}
</style>
