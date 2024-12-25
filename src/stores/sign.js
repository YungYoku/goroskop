import { defineStore } from 'pinia'

export const useSign = defineStore('sign', {
	state: () => ({
		value: localStorage.getItem('sign') ?? 0
	}),

	actions: {
		set (value) {
			this.value = value
			localStorage.setItem('sign', JSON.stringify(value))
		}
	}
})
