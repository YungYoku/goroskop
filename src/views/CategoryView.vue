<template>
	<Page>
		<router-link to="/">
			Назад
		</router-link>

		<div class="category-info">
			<div class="category-info__title">
				{{ data.title }}
			</div>

			<div class="category-info__description">
				{{ data.description }}
			</div>
		</div>
	</Page>
</template>

<script setup>
import { ref } from 'vue'

import Page from '@/components/page.vue'

const data = ref({
	title: 'Название',
	description: 'Описание'
})

const loadData = async () => {
	// Здесь меняет api роут на свой
	await fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then(res => res.json())
		.then(res => {
			data.value.title = res.title
			data.value.description = res.body
		})
}
loadData()
</script>
