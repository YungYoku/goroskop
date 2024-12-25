import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/sign',
			name: 'sign',
			component: () => import('../views/SignView.vue')
		},
		{
			path: '/category/:category',
			name: 'category',
			component: () => import('../views/CategoryView.vue')
		}
	]
})

router.beforeEach(() => {
	// Здесь можно вставить рекламки
	return true
})

export default router
