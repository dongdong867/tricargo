<template>
	<div class="w-full h-[92vh] overflow-hidden">
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
</template>

<script setup>
import { Parkinglot } from '../utils/Parkinglot'
import { useParkinglotsStore } from '~~/src/stores/parkinglots'
import { initMap } from '~/utils/googlemap'
import { getSpaceData } from '../utils/space'

const calculate = ref(false)
let selectedParkinglot = new Parkinglot()
const parkinglots = useParkinglotsStore()
const spacedata = ref()
const park = ref(false)

onMounted(() => {
	parkinglots.fetchParkinglotInfo()
	initMap(document.getElementById('map'), markerClicked)
})

async function markerClicked(marker) {
	spacedata.value = await getSpaceData(marker.getTitle())
	park.value = !park.value
	selectedParkinglot = parkinglots.getParkinglotByID(marker.getTitle()).data
}
</script>
