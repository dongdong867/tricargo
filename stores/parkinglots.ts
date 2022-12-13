import { defineStore } from 'pinia'
import { Parkinglot } from '~~/utils/parkinglot'

interface ParkinglotRawData {
	id: string
	area: string
	name: string
	type: '1' | '2' | string
	address: string
	tw97x: string
	tw97y: string
	tel: string
	serviceTime: string
	FareInfo: {
		WorkingDay: [
			{
				Period: string
				Fare: string
			}
		]
		Holiday: [
			{
				Period: string
				Fare: string
			}
		]
	}
}

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
				for (let parkinglot in res.data) {
					const data: ParkinglotRawData = {
						id: res.data[parkinglot].id,
						area: res.data[parkinglot].area,
						name: res.data[parkinglot].name,
						type: res.data[parkinglot].type,
						address: res.data[parkinglot].address,
						tw97x: res.data[parkinglot].tw97x,
						tw97y: res.data[parkinglot].tw97y,
						tel: res.data[parkinglot].tel,
						serviceTime: res.data[parkinglot].serviceTime,
						FareInfo: {
							WorkingDay: res.data[parkinglot].FareInfo.WorkingDay,
							Holiday: res.data[parkinglot].FareInfo.Holiday
						}
					}
					parkinglotArray.push(new Parkinglot(data))
				}
				this.parkinglots = parkinglotArray
			})
		},

		getParkinglotByID(id: string) {
			for (let parkinglotId in this.parkinglots) {
				if (parkinglotId === id) return this.parkinglots[parkinglotId]
			}
		}
	}
})
