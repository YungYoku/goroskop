<template>
	<Page>
		<router-link to="/">
			Назад
		</router-link>

		<div class="category-info">
			<div class="category-info__title">
				Название
			</div>

			<div class="category-info__description">
				Описание
			</div>
		</div>
	</Page>
</template>

<script setup>
import Page from '@/components/page.vue'
</script>
