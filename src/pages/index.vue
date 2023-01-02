<template>
	<div>
		<div
			class="w-full h-[92vh] overflow-hidden"
			:class="pageloaded ? ['opacity-100'] : ['opacity-0']"
		>
			<div
				class="absolute z-20 left-1/2 -translate-x-1/2 transition-all duration-500"
				:class="timerRunning ? ['-top-[0vh]'] : ['-top-[12vh]']"
			>
				<Timer class="max-w-lg" :time="time" @cancleButtonClicked="timerStop" />
			</div>
			<div id="map" class="max-w-lg h-[90vh]"></div>
			<div
				class="relative w-[100vw] h-[45vh] transition-all duration-500"
				:class="park ? ['-top-[40vh]'] : ['top-0']"
			>
				<Parking
					:parkinglot="selectedParkinglot"
					:space="spacedata"
					:timerRunning="timerRunning"
					@dragbarClicked="parkBoxDown"
					@startButtonClicked="timerStart"
					@parkButtonClicked="parkedHandler"
				/>
			</div>
		</div>
		<div
			v-if="parkedError == true"
			class="w-[80vw] h-[30vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] z-50"
		>
			<ParkedError @closeParkedError="parkedError = !parkedError" />
		</div>
		<div v-if="payed == true" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]">
			<Payed :parkinglot="selectedParkinglot" @confirmButtonClicked="paymentFinished" />
		</div>
		<div
			class="absolute w-screen max-w-lg h-screen top-0 bg-[url('~/assets/icons/loading-background.svg?url')] bg-[length:100vw_auto]"
			:class="pageloaded ? ['opacity-0 -z-50'] : ['opacity-100']"
		>
			<div
				class="w-max h-[90vh] m-auto flex flex-col place-items-center place-content-center drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
			>
				<img :src="Icon" />
				<div class="text-2xl font-extrabold leading-[0.8]">LOADING...</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Parkinglot } from '../utils/Parkinglot'
import { useParkinglotsStore } from '~~/src/stores/parkinglots'
import { initMap } from '~/utils/googlemap'
import { getSpaceData } from '../utils/space'
import Icon from '~/assets/icons/icon.svg?url'
import moment from 'moment'

const parkinglots = useParkinglotsStore()
const spacedata = ref()
const park = ref(false)
const pageloaded = ref(false)
const timerRunning = ref(false)
const time = computed(() => formatTime())
const parked = ref(false)
const parkedError = ref(false)
const payed = ref(false)

let selectedParkinglot = new Parkinglot()
let timerCount = ref(600)

onMounted(async () => {
	await parkinglots.fetchParkinglotInfo()
	await initMap(document.getElementById('map'), markerClicked, pageloaded)
})

async function markerClicked(marker) {
	if (parked.value == true) {
		parkedError.value = true
	} else {
		spacedata.value = await getSpaceData(marker.getTitle())
		park.value = !park.value
		selectedParkinglot = parkinglots.getParkinglotByID(marker.getTitle()).data
	}
}

const parkBoxDown = () => (park.value = false)

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

const removeParked = async () => {
	await new Promise((resolve) => setTimeout(resolve, 60000))
	parked.value = false
	payed.value = true
}

const formatTime = () => {
	let minutes = moment.duration(timerCount.value, 's').minutes().toString()
	minutes = minutes.length == 1 ? '0' + minutes : minutes

	let seconds = moment.duration(timerCount.value, 's').seconds().toString()
	seconds = seconds.length == 1 ? '0' + seconds : seconds

	return minutes + ':' + seconds
}

const parkedHandler = () => {
	timerStop()
	park.value = false
	parked.value = true
	removeParked()
}

const paymentFinished = () => (payed.value = false)
</script>
