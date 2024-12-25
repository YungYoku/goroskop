<template>
	<div class="page">
		<slot/>
	</div>
</template>

<style scoped>
.page {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
