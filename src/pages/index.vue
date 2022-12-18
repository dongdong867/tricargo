<template>
	<div>
		<div
			class="w-full h-[92vh] overflow-hidden"
			:class="pageloaded ? ['opacity-100'] : ['opacity-0']"
		>
			<div id="map" class="max-w-lg h-[92vh]"></div>
			<div class="absolute w-[100vw] h-[45vh]" :class="park ? ['top-[47vh]'] : ['top-[100vh]']">
				<Parking :parkinglot="selectedParkinglot" :space="spacedata" />
			</div>
			<div
				class="absolute w-[100vw] h-[45vh]"
				:class="calculate ? ['top-[50vh] opacity-100'] : ['top-[100vh] opacity-0']"
			>
				<Calculate />
			</div>
		</div>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col place-items-center"
			:class="pageloaded ? ['opacity-0'] : ['opacity-100']"
		>
			<img :src="Icon" />
			<div class="text-2xl font-extrabold leading-[0.8]">LOADING...</div>
		</div>
	</div>
</template>

<script setup>
import { Parkinglot } from '../utils/Parkinglot'
import { useParkinglotsStore } from '~~/src/stores/parkinglots'
import { initMap } from '~/utils/googlemap'
import { getSpaceData } from '../utils/space'
import Icon from '~/assets/icons/icon.svg?url'

const calculate = ref(false)
const parkinglots = useParkinglotsStore()
const spacedata = ref()
const park = ref(false)
const pageloaded = ref(false)
let selectedParkinglot = new Parkinglot()

onMounted(() => {
	initMap(document.getElementById('map'), markerClicked, pageloaded)
})

async function markerClicked(marker) {
	spacedata.value = await getSpaceData(marker.getTitle())
	park.value = !park.value
	selectedParkinglot = parkinglots.getParkinglotByID(marker.getTitle()).data
}
</script>
