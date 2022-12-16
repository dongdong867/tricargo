import { Loader } from '@googlemaps/js-api-loader'
import { useParkinglotsStore } from '../stores/parkinglots'
import { twd97_to_latlng } from './twd97_to_latlng'

export const initMap = (map: google.maps.Map, markerClicked: Function): void => {
	const fetchGoogleMap = (): void => {
		const config = useRuntimeConfig().public
		const loader = new Loader({
			apiKey: config.GOOGLE_MAPS_API_KEY
		})
		loader.load().then(() => {
			map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
				center: {
					lat: 0,
					lng: 0
				},
				zoom: 15,
				disableDefaultUI: true,
				styles: [
					{
						featureType: 'poi',
						stylers: [
							{
								visibility: 'off'
							}
						]
					},
					{
						featureType: 'poi.place_of_worship',
						stylers: [
							{
								visibility: 'on'
							}
						]
					}
				]
			})
			setMarker(markerClicked)
		})
	}

	const getLocation = (): void => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const location = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}
				map.setCenter(new google.maps.LatLng(location.lat, location.lng))
			})
		} else {
			console.log('Not support GPS function.')
		}
	}

	const setMarker = (test: Function): void => {
		const parkinglotStore = useParkinglotsStore()
		parkinglotStore.fetchParkinglotInfo()
		console.log('parkinglot info fetched')
		const parkinglots = computed(() => parkinglotStore.getParkinglots)
		for (let parkinglotId in parkinglots.value) {
			const parkinglot = computed(() => parkinglotStore.getParkinglotByID(parkinglotId))
			if (parkinglot.value) {
				let marker = new google.maps.Marker({
					position: twd97_to_latlng(+parkinglot.value.getTw97x(), +parkinglot.value.getTw97y()),
					title: parkinglotId
				})
				marker.setMap(map)
				marker.addListener('click', () => {
					test(marker)
				})
			}
		}
	}

	fetchGoogleMap()
	console.log('google map fetched')
	getLocation()
}
