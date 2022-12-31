<template>
	<div
		class="max-w-lg h-[40vh] bg-base-grey text-white font-bold px-[5vh] pt-[2vh] bg-opacity-80 rounded-t-[30px] flex flex-col place-content-start"
	>
		<img
			:src="dragbar"
			class="h-[0.8vh] relative z-20 cursor-pointer"
			@click="$emit('dragbarClicked')"
		/>

		<div class="text-3xl mt-[3vh]">{{ parkinglot.name }}</div>
		<div>收費方式: 120元/小時</div>
		<div class="mt-[1vh]">{{ parkinglot.area }}</div>

		<div>{{ space }} 個車位剩餘</div>

		<button
			v-if="timerRunning == false"
			@click="$emit('startButtonClicked')"
			class="max-w-[100%] bg-light-blue text-base-blue w-[80vw] h-[10vh] opacity-100 flex place-content-around place-items-center space-x-[15vw] mt-[3vh] rounded-[15px]"
		>
			<img :src="reserve" />
			<div class="text-4xl">Start</div>
		</button>

		<button
			v-if="timerRunning == true"
			@click="$emit('parkButtonClicked')"
			class="max-w-[100%] bg-light-orange text-base-orange h-[10vh] opacity-100 flex place-content-around place-items-center space-x-[15vw] mt-[3vh] rounded-[15px]"
		>
			<img :src="park" />
			<div class="text-4xl">Park</div>
		</button>
	</div>
</template>
<script setup>
import reserve from '~/assets/icons/parking/reserve.svg?url'
import park from '~/assets/icons/parking/park.svg?url'
import dragbar from '~/assets/icons/parking/dragbar.svg?url'

const props = defineProps({
	parkinglot: {
		area: {
			type: String,
			require: true
		},
		name: {
			type: String,
			require: true
		},
		address: {
			type: String,
			require: true
		},
		tel: {
			type: String,
			require: true
		},
		serviceTime: {
			type: String,
			require: true
		},
		payex: {
			type: String,
			require: true
		}
	},
	space: {
		type: Number,
		require: true
	},
	timerRunning: {
		type: Boolean,
		require: true
	}
})
</script>
