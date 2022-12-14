<template>
	<div class="w-full h-full">
		<div id="map" class="max-w-lg h-[92vh]"></div>
		<div class="absolute w-full h-1/2" :class="park ? ['top-1/2'] : ['top-full']">
			<Parking />
		</div>
		<div class="absolute w-full h-1/2" :class="calculate ? ['top-1/2'] : ['top-full']">
			<Calculate />
		</div>
	</div>
</template>

<script setup>
import { Loader } from '@googlemaps/js-api-loader'
import { useParkinglotsStore } from '../stores/parkinglots'

const config = useRuntimeConfig().public

const park = ref(false)
const calculate = ref(false)

const parkinglotStore = useParkinglotsStore()
const parkinglots = computed(() => parkinglotStore.getParkinglots)

onMounted(() => {
	initMap()
})

const initMap = async () => {
	const loader = new Loader({
		apiKey: config.GOOGLE_MAPS_API_KEY
	})

	loader.load().then(() => {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 0,
				lng: 0
			},
			zoom: 15,
			disableDefaultUI: true
		})

		for (const parkinglotId in parkinglots.value) {
			const parkinglot = computed(() => parkinglotStore.getParkinglotByID(parkinglotId))
			console.log(parkinglot.value)
			let marker = new google.maps.Marker({
				position: twd97_to_latlng(parkinglot.value.getTw97x(), parkinglot.value.getTw97y()),
				map: map
			})
		}
	})
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const location = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}
			map.setCenter(location)
		})
	} else {
		alert('不支援定位功能')
	}
}
</script>
