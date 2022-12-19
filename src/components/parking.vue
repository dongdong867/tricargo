<template>
	<div class="w-[100vw] h-[45vh] bg-white">
		<div>{{ parkinglot.area }}</div>
		<div>{{ parkinglot.name }}</div>
		<div>{{ parkinglot.address }}</div>
		<div>{{ parkinglot.tel }}</div>
		<div>{{ parkinglot.serviceTime }}</div>
		<div>{{ parkinglot.payex }}</div>
		<div>{{ space }}</div>

		<div>
			{{ formatTime() }}
		</div>
		<button v-if="timerRunning" @click="timerStop" class="bg-black text-white w-max h-max">
			<div>Stop</div>
		</button>
		<button v-else @click="timerStart" class="bg-black text-white w-max h-max">
			<div>Start</div>
		</button>
	</div>
</template>
<script setup>
import moment from 'moment'

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
	}
})

const timerRunning = ref(false)
let timerCount = ref(600)

const timerStart = () => {
	timerCount.value = 600
	timerRunning.value = true
	countdown()
}

const countdown = () => {
	if (timerCount.value > 0 && timerRunning.value == true) {
		setTimeout(() => {
			timerCount.value -= 1
			countdown()
		}, 1000)
	}

	if (timerCount.value == 0) {
		timerCount.value = 600
	}
}

const timerStop = () => {
	timerRunning.value = false
	clearTimeout(timerCount)
}

const formatTime = () => {
	let minutes = moment.duration(timerCount.value, 's').minutes().toString()
	minutes = minutes.length == 1 ? '0' + minutes : minutes

	let seconds = moment.duration(timerCount.value, 's').seconds().toString()
	seconds = seconds.length == 1 ? '0' + seconds : seconds

	return minutes + ':' + seconds
}
</script>
