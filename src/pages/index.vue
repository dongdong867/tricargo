<template>
	<div class="w-full h-[92vh] overflow-hidden">
		<div id="map" class="max-w-lg h-[92vh]"></div>
		<div class="absolute w-[100vw] h-[45vh]" :class="park ? ['top-[47vh]'] : ['top-[100vh]']">
			<Parking :parkinglot="selectedParkinglot" />
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
import { initMap } from '~/utils/googlemap'
import { useParkinglotsStore } from '../stores/parkinglots'

const park = ref(false)
const calculate = ref(false)
const parkinglotsStore = useParkinglotsStore()
let selectedParkinglot = { Parkinglot }

onMounted(() => {
	initMap(map, markerClicked)
})

function markerClicked(marker) {
	park.value = !park.value
	selectedParkinglot = parkinglotsStore.getParkinglotByID(marker.getTitle()).data
}
</script>
