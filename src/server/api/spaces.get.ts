import axios from 'axios'

async function fetchSpacesData() {
	return new Promise((resolve, reject) => {
		const SpaceDataScript =
			'https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_allavailable.json'
		axios
			.get(SpaceDataScript)
			.then((response) => {
				let result = response.data
				result = result.data.park

				resolve({ success: true, data: result })
			})
			.catch((error) => {
				console.log(error)
				reject({ success: false, data: error })
			})
	})
}

export default defineEventHandler(async () => {
	return await fetchSpacesData()
})
