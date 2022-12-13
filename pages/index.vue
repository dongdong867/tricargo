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
import axios from 'axios'

const config = useRuntimeConfig().public

const park = ref(false)
const calculate = ref(false)

let datas = await axios.get('https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_alldesc.json')

onMounted(() => {
	initMap()
})

const initMap = () => {
	const loader = new Loader({
		apiKey: config.GOOGLE_MAPS_API_KEY
	})

	let map

	loader.load().then(() => {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 0,
				lng: 0
			},
			zoom: 15,
			disableDefaultUI: true
		})

		datas = datas.data.data.park
		for (const park in datas) {
			let marker = new google.maps.Marker({
				position: twd97_to_latlng(datas[park].tw97x, datas[park].tw97y),
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
