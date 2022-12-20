import { defineStore } from 'pinia'
import { Parkinglot } from '../utils/Parkinglot'

export const useParkinglotsStore = defineStore('parkingLot', {
	state: () => ({
		parkinglots: [] as Parkinglot[]
	}),
	getters: {
		getParkinglots: (state) => state.parkinglots
	},
	actions: {
		async fetchParkinglotInfo() {
			await $fetch('/api/parkinglotInfo').then((res: any) => {
				let parkinglotArray: Array<Parkinglot> = []
				for (const parkinglot in res.data) {
					const data = {
						id: res.data[parkinglot].id,
						area: res.data[parkinglot].area,
						name: res.data[parkinglot].name,
						type: res.data[parkinglot].type,
						address: res.data[parkinglot].address,
						tw97x: res.data[parkinglot].tw97x,
						tw97y: res.data[parkinglot].tw97y,
						tel: res.data[parkinglot].tel,
						serviceTime: res.data[parkinglot].serviceTime,
						payex: res.data[parkinglot].payex
					}
					parkinglotArray.push(new Parkinglot(data))
				}
				this.parkinglots = parkinglotArray
			})
		},

		getParkinglotByID(id: string) {
			for (let parkinglotId in this.parkinglots) {
				if (this.parkinglots[parkinglotId].getId() === id) return this.parkinglots[parkinglotId]
			}
		}
	}
})
