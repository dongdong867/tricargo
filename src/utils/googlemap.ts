import { Loader } from '@googlemaps/js-api-loader'
import { useParkinglotsStore } from '../stores/parkinglots'
import { twd97_to_latlng } from './twd97_to_latlng'

export async function initMap(mapDiv: HTMLElement, markerClicked: Function): Promise<void> {
	async function setLoader(): Promise<Loader> {
		const config = useRuntimeConfig().public
		const loader = new Loader({
			apiKey: config.GOOGLE_MAPS_API_KEY
		})
		return loader
	}

	async function getCurrentLocation(): Promise<google.maps.LatLng> {
		return new Promise((resolve) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					resolve(new google.maps.LatLng(position.coords.latitude, position.coords.longitude))
					console.log('get current location')
				})
			} else {
				console.log('Not support GPS function.')
			}
		})
	}

	async function fetchMap(): Promise<google.maps.Map> {
		const loader = await setLoader()
		await loader.load()
		const location = await getCurrentLocation()
		return new Promise((resolve) => {
			let map: google.maps.Map

			loader.load().then(() => {
				map = new google.maps.Map(mapDiv, {
					center: location,
					zoom: 15,
					disableDefaultUI: true,
					styles: [
						{ featureType: 'poi', stylers: [{ visibility: 'off' }] },
						{ featureType: 'poi.place_of_worship', stylers: [{ visibility: 'on' }] }
					]
				})
				resolve(map)
				console.log('fetched map')
			})
		})
	}

	async function setMarker(map: google.maps.Map): Promise<void> {
		const parkinglotStore = useParkinglotsStore()
		await parkinglotStore.fetchParkinglotInfo()
		const parkinglots = computed(() => parkinglotStore.getParkinglots)

		for (let i = 0; i < parkinglots.value.length; i++) {
			const parkinglot = computed(() =>
				parkinglotStore.getParkinglotByID(parkinglots.value[i].getId())
			)
			if (parkinglot.value) {
				const markerLocation = twd97_to_latlng(
					+parkinglot.value.getTw97x(),
					+parkinglot.value.getTw97y()
				)
				const marker = new google.maps.Marker({
					position: new google.maps.LatLng(markerLocation.lat, markerLocation.lng),
					title: parkinglot.value.getId()
				})
				marker.setMap(map)
				marker.addListener('click', () => markerClicked(marker))
			}
		}
		console.log('set marker')
	}

	const map = await fetchMap()
	await setMarker(map)
}
